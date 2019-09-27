import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import { DndColumn } from '../DndColumn';

import { initialData } from '../../Data/dndData';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 20px;
`;

export class DndContainer extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            ...initialData
        };

        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragUpdate = this.onDragUpdate.bind(this);
    };

    public onDragStart = () => {
        document.body.style.color = 'red';
        document.body.style.transition = 'background-color 0.3s ease';
    }

    public onDragUpdate = (update: any) => {
        const { destination } = update;
        const opacity = destination
            ? destination.index / Object.keys(this.state.tasks).length
            : 0;

        document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    }

    public onDragEnd = (result: any) => {
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const startColumn = this.state.columns[source.droppableId];
        const finishColumn = this.state.columns[destination.droppableId];

        if (startColumn === finishColumn) {
            const newTasksIds = Array.from(startColumn.tasksIds);
            newTasksIds.splice(source.index, 1);
            newTasksIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                tasksIds: newTasksIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn, 
                }
            };

            this.setState(newState);
            return;
        }

        const startTasksIds = Array.from(startColumn.tasksIds);
        startTasksIds.splice(source.index, 1);
        const newStartColumn = {
            ...startColumn,
            tasksIds: startTasksIds
        };

        const finishTasksIds = Array.from(finishColumn.tasksIds);
        finishTasksIds.splice(destination.index, 0, draggableId);
        const newFinishColumn = {
            ...finishColumn,
            tasksIds: finishTasksIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn
            }
        }
        
        this.setState(newState);
    };

    public render() {
        const { tasks, columns, columnOrder } = this.state;

        return (
            <Container>
                <DragDropContext
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}>
                    {
                        columnOrder.map((columnId: string) => {
                            const column = columns[columnId];
                            const columnTasks = column.tasksIds.map((taskId: string) => tasks[taskId]);

                            return <DndColumn key={column.id} column={column} tasks={columnTasks} />
                        })
                    }
                </DragDropContext>
            </Container>
        )
    }
}