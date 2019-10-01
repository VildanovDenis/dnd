import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult, DraggableLocation } from 'react-beautiful-dnd';

import { DndContainerProps, DndContainerState } from './types';

import { DndColumn } from '../DndColumn';

import { initialData } from '../../Data/dndData';
import { Column } from '../../Data/types';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 20px;
`;

export class DndContainer extends React.PureComponent<DndContainerProps, DndContainerState> {
    constructor(props: DndContainerProps) {
        super(props);

        this.state = {
            ...initialData
        };

        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragUpdate = this.onDragUpdate.bind(this);
    };

    private onDragStart() {
        document.body.style.color = 'red';
        document.body.style.transition = 'background-color 0.3s ease';
    }

    private onDragUpdate(update: any) {
        const { destination } = update;
        const opacity = destination
            ? destination.index / Object.keys(this.state.tasks).length
            : 0;

        document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
    }

    private onDragEnd(result: DropResult): void {
        document.body.style.color = 'inherit';
        document.body.style.backgroundColor = 'inherit';

        const { destination, source } = result;

        if (!result.destination) {
            return;
        }

        if (this.isDragPositionEqual(result.destination, source)) {
            return;
        }

        const startColumn: Column = this.state.columns[source.droppableId];
        const finishColumn: Column = this.state.columns[result.destination.droppableId];

        return startColumn === finishColumn
            ? this.dragInsideColumn(result)
            : this.dragOutsideColumn(result);
    };

    private isDragPositionEqual(destination: DraggableLocation, source: DraggableLocation): boolean {
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return true;
        }

        return false;
    }

    private dragInsideColumn(result: DropResult): void {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        const column: Column = this.state.columns[destination.droppableId];

        const newTasksIds = [...column.tasksIds];

        newTasksIds.splice(source.index, 1);
        newTasksIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            tasksIds: newTasksIds
        };

        this.setState({
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn, 
            }
        });
    }

    private dragOutsideColumn(result: DropResult): void {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        const startColumn: Column = this.state.columns[source.droppableId];
        const finishColumn: Column = this.state.columns[destination.droppableId];

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
    }

    public render() {
        const { tasks, columns, columnOrder } = this.state;
        //9
        
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