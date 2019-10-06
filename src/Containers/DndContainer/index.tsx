import React from 'react';
import styled from 'styled-components';
import { DragDropContext, DropResult, DraggableLocation } from 'react-beautiful-dnd';

import { DndContainerProps, DndContainerState } from './types';

import { DndColumn } from '../DndColumn';

import { initialData, createSomeData } from '../../Data/dndData';
import { Column, ColumnOrder, Columns } from '../../Data/types';

const Container = styled.div`
    display: flex;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    padding: 25px 40px;
    overflow-x: auto;
`;

const ButtonWrapper = styled.div`
    width: 250px;
    padding: 8px;
`;

const Button = styled.button`
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    border-radius: 4px;
    background-color: lightgray;
    opacity: 0.2;
    transition: opacity 0.3s;

    ::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 6px;
        height: 80px;
        background-color: gray;
        border-radius: 3px;
    }

    ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(90deg);
        width: 6px;
        height: 80px;
        background-color: gray;
        border-radius: 3px;
    }

    :hover {
        opacity: 0.5;
    }
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
        this.onAddColumnClick = this.onAddColumnClick.bind(this);
    };

    componentDidMount() {
        const data = createSomeData(25, 4);

        this.setState({
            ...data
        });
    }

    private onAddColumnClick() {
        const { columnOrder, columns } = this.state;

        const newColumnId: string = `column-${columnOrder.length}`;
        const newColumnTitle: string = `column ${columnOrder.length} title`
        const tasksIds: Array<string> = [];

        const newColumnOrder: ColumnOrder = [...columnOrder, newColumnId];
        const newColumns: Columns = {
            ...columns,
            [newColumnId]: {
                id: newColumnId,
                title: newColumnTitle,
                tasksIds: tasksIds
            }
        };

        this.setState({
            columnOrder: newColumnOrder,
            columns: newColumns
        })
    }

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
        const { tasks, columns, columnOrder }: DndContainerState = this.state;
        const isAddColumnShow: boolean = columnOrder.length < 6;
        
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
                {
                    isAddColumnShow &&
                    <ButtonWrapper>
                        <Button onClick={this.onAddColumnClick} />
                    </ButtonWrapper>
                }
            </Container>
        )
    }
}