import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { DragDropContext, DropResult, DraggableLocation } from 'react-beautiful-dnd';

import {
    DndContainerProps,
    DndContainerState,
    DndContainerStateProps,
    DndContainerDispatchProps
} from './types';

import { DndColumn } from '../DndColumn';

// import { initialData, createSomeData } from '../../Data/dndData';
import { Column, ColumnOrder, Columns, Task } from '../../Data/types';

import { getScrumData, setScrumData } from '../../Store/Action/scrumData';

import { State, ReduxDispatch } from '../../Store/types';
import { dataStatuses } from '../../Data/dataStatuses';

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

const mapStateToProps = (state: State): DndContainerStateProps => {
    return {
        initialData: state.scrumDataReducer
    }
};

const mapDispatchToProps = (dispatch: ReduxDispatch): DndContainerDispatchProps => (
    bindActionCreators(
        {
            getScrumData: getScrumData,
            setScrumData: setScrumData
        }, dispatch
    )
)

export const DndContainer = connect(mapStateToProps, mapDispatchToProps)(
    class DndContainer extends React.PureComponent<DndContainerProps, DndContainerState> {
        constructor(props: DndContainerProps) {
            super(props);

            this.state = {
                tasks: {},
                columns: {},
                columnOrder: []
            };

            this.onDragEnd = this.onDragEnd.bind(this);
            this.onDragStart = this.onDragStart.bind(this);
            this.onDragUpdate = this.onDragUpdate.bind(this);
            this.onAddColumnClick = this.onAddColumnClick.bind(this);
            this.onDeleteColumnClick = this.onDeleteColumnClick.bind(this);
            this.onDeleteTaskClick = this.onDeleteTaskClick.bind(this);
            this.onAddTaskClick = this.onAddTaskClick.bind(this);
            this.onTitleUpdate = this.onTitleUpdate.bind(this);
        };

        componentDidMount() {
            this.props.getScrumData(this.props.initialData.dataStatus);
        }

        private onAddColumnClick():void {
            const { columnOrder, columns } = this.props.initialData.data;

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

            const newData = {
                tasks: this.props.initialData.data.tasks,
                columns: newColumns,
                columnOrder: newColumnOrder
            }

            this.props.setScrumData(newData);
        };

        private onDeleteColumnClick(columnId: string): void {
            const { data } = this.props.initialData;
            const { columns, columnOrder } = data;

            delete columns[columnId];

            const newOrder = columnOrder.filter(id => columnId !== id);

            const newData = {
                ...data,
                columns: columns,
                columnOrder: newOrder
            };

            this.props.setScrumData(newData);
        };

        private onDeleteTaskClick(taskId: string, columnId: string): void {
            const { data } = this.props.initialData;
            const { tasks, columns, columnOrder } = data;

            delete tasks[taskId];

            const newParentColumnTasks = columns[columnId].tasksIds.filter(id => taskId !== id);

            const newData = {
                tasks: tasks,
                columns: {
                    ...columns,
                    [columnId]: {
                        ...columns[columnId],
                        tasksIds: newParentColumnTasks
                    }
                },
                columnOrder: columnOrder
            };

            this.props.setScrumData(newData);
        };

        private onAddTaskClick(columnId: string, taskContent: string): void {
            const { data } = this.props.initialData;
            const { tasks } = data;

            const tasksLength: number = Object.keys(tasks).length;

            const newTask: Task = {
                id: `Task-${tasksLength}`,
                content: taskContent
            };
            
            const newColumn: Column = {
                ...data.columns[columnId],
                tasksIds: [`Task-${tasksLength}`, ...data.columns[columnId].tasksIds] 
            };

            const newData = {
                ...data,
                tasks: {
                    ...data.tasks,
                    [`Task-${tasksLength}`]: newTask
                },
                columns: {
                    ...data.columns,
                    [columnId]: newColumn
                }
            };

            this.props.setScrumData(newData);
        };

        onTitleUpdate(columnId: string, title: string): void {
            const { data } = this.props.initialData;

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [columnId]: {
                        ...data.columns[columnId],
                        title: title
                    }
                }
            };

            this.props.setScrumData(newData);
        }

        private onDragStart():void {
            document.body.style.color = 'red';
            document.body.style.transition = 'background-color 0.3s ease';
        };

        private onDragUpdate(update: any) {
            const { destination } = update;
            const opacity = destination
                ? destination.index / Object.keys(this.state.tasks).length
                : 0;

            document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
        };

        private onDragEnd(result: DropResult): void {
            document.body.style.color = 'inherit';
            document.body.style.backgroundColor = 'inherit';

            const { source } = result; //destination

            if (!result.destination) {
                return;
            }

            if (this.isDragPositionEqual(result.destination, source)) {
                return;
            }

            const { data } = this.props.initialData;
            const startColumn: Column = data.columns[source.droppableId];
            const finishColumn: Column = data.columns[result.destination.droppableId];

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
        };

        private dragInsideColumn(result: DropResult): void {
            const { destination, source, draggableId } = result;

            if (!destination) {
                return;
            }

            const { data } = this.props.initialData;

            const column: Column = data.columns[destination.droppableId];

            const newTasksIds = [...column.tasksIds];

            newTasksIds.splice(source.index, 1);
            newTasksIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...column,
                tasksIds: newTasksIds
            };

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn, 
                }
            }

            this.props.setScrumData(newData);
        };

        private dragOutsideColumn(result: DropResult): void {
            const { destination, source, draggableId } = result;
            
            if (!destination) {
                return;
            }

            const { data } = this.props.initialData;

            const startColumn: Column = data.columns[source.droppableId];
            const finishColumn: Column = data.columns[destination.droppableId];

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

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinishColumn.id]: newFinishColumn
                }
            }

            this.props.setScrumData(newData);
        };

        public render() {
            const { dataStatus } = this.props.initialData;
            const { tasks, columns, columnOrder } = this.props.initialData.data;
            const isAddColumnShow: boolean = columnOrder.length < 6;

            if ( dataStatus === dataStatuses.fetching || dataStatus === dataStatuses.initial ) {
                return (
                    <Container>
                        <span>Загружаемся</span>
                    </Container>
                )
            }

            if ( dataStatus === dataStatuses.error ) {
                return (
                    <Container>
                        <span>Ошибка =(</span>
                    </Container>
                )
            }
            
            return (
                <Container>
                    <DragDropContext
                        onDragStart={this.onDragStart}
                        onDragUpdate={this.onDragUpdate}
                        onDragEnd={this.onDragEnd}>
                        {
                            columnOrder.map((columnId: string, index: number) => {
                                const column = columns[columnId];
                                const columnTasks = column.tasksIds.map((taskId: string) => tasks[taskId]);

                                return <DndColumn
                                            key={column.id}
                                            index={index}
                                            column={column}
                                            tasks={columnTasks}
                                            onDeleteColumnClick={this.onDeleteColumnClick}
                                            onDeleteTaskClick={this.onDeleteTaskClick}
                                            onTitleUpdate={this.onTitleUpdate}
                                            onAddTaskClick={this.onAddTaskClick} />
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
)