import React, { ChangeEvent } from 'react';
import styled, { css, keyframes }  from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { DndColumnProps, DndColumnState } from './types';
import { Task } from '../../Data/types';

import { DndTask } from '../DndTask';
import { TaskAdd } from '../TaskAdd';

const FadeInTop = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const FadeInTopAnimation = (props: any) => 
    css`
        ${FadeInTop} 0.2s linear ${props.index * 0.1}s
    `;

const Container = styled.div<any>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    width: 250px;
    max-height: 100%;
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: white;
    // opacity: 0;
    // animation: ${FadeInTopAnimation};
`;

const Column = styled.div<{isDraggingOver: boolean}>`
    max-height: calc(100% - 22px - 10px);
    flex: 1 1 100%;
    margin: 0 0 11px;
    padding: 8px 11px 0;
    transition: background-color 0.3s ease;
    background-color: ${(props: any) => props.isDraggingOver ? 'skyblue' : 'inherit'};
    overflow-y: auto;
`;

const ColumnHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px 8px 8px;
    margin-bottom: 10px;
`;

const Title = styled.input`
    flex-shrink: 0;
    max-width: 75%;
    width: 75%;
    height: 22px;
    margin: 0 auto 0 0;
    border: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    will-change: color;
    transition: color 0.3s;
    
    :hover {
        color: rgba(0, 0, 0, 0.6);
    }

    :focused {
        text-overflow: clip;
        overflow: visible;
        color: rgba(0, 0, 0, 1);
    }
`;

export const DeleteButton = styled.button`
    position: relative;
    width: 22px;
    height: 22px;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        width: 3px;
        height: 15px;
        background-color: lightgray;
        transition: 0.3s;
    }

    ::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(-45deg);
        width: 3px;
        height: 15px;
        background-color: lightgray;
        transition: 0.3s;
    }

    :hover::after {
        background-color: lightcoral
    };

    :hover::before {
        background-color: lightcoral;
    }

    :disabled {
        cursor: not-allowed;
    }

    :disabled::after {
        background-color: #e6e6e6;
    }

    :disabled::before {
        background-color: #e6e6e6;
    }

    :disabled:hover::after {
        background-color: #e6e6e6;
    }

    :disabled:hover::before{
        background-color: #e6e6e6;
    }
`;

export class DndColumn extends React.PureComponent<DndColumnProps, DndColumnState> {
    constructor(props: DndColumnProps) {
        super(props);

        this.state = {
            columnTitle: ''
        }

        this.onDeleteColumnClick = this.onDeleteColumnClick.bind(this);
        this.onDeleteTaskClick = this.onDeleteTaskClick.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onTitleBlur = this.onTitleBlur.bind(this);
    };

    componentDidMount() {
        this.setState({
            columnTitle: this.props.column.title
        })
    }

    onDeleteColumnClick(): void {
        this.props.onDeleteColumnClick(this.props.column.id);
    }

    onDeleteTaskClick(taskId: string): void {
        const columnId = this.props.column.id;

        this.props.onDeleteTaskClick(taskId, columnId);
    }

    onTitleChange(e: ChangeEvent<HTMLInputElement>) {
        // there is no calling ?????????????????
        const value = e.target.value;

        this.setState({
            columnTitle: value
        });
    }

    onTitleBlur(): void {
        const { column, onTitleUpdate } = this.props;
        const { columnTitle } = this.state;

        if (columnTitle === column.title) {
            return
        }

        if (!columnTitle) {
            this.setState({
                columnTitle: column.title
            });

            return
        }

        onTitleUpdate(column.id, columnTitle);
    }

    public render() {
        const { column, tasks, index, onAddTaskClick } = this.props;
        const isDeleteButtonDisabled: boolean = Boolean(tasks.length);
        const { columnTitle } = this.state;

        return (
            <Draggable draggableId={column.id} index={index}>
                {(provided) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}>
                    <ColumnHeader {...provided.dragHandleProps}>
                        <Title
                            contentEditable={true}
                            onBlur={this.onTitleBlur}
                            onChange={this.onTitleChange}
                            value={columnTitle}>
                        </Title>
                        <DeleteButton
                            disabled={isDeleteButtonDisabled}
                            onClick={this.onDeleteColumnClick} />
                    </ColumnHeader>
                    <TaskAdd onAddTaskClick={onAddTaskClick} columnId={column.id} />
                    <Droppable droppableId={column.id} type='tasks'>
                        {(provided, shapshot) => (
                            <Column
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={shapshot.isDraggingOver}
                            >

                                {tasks.map((task: Task, index: number) => (
                                    <DndTask
                                        key={task.id}
                                        task={task}
                                        index={index}
                                        onDeleteTaskClick={this.onDeleteTaskClick} />
                                ))}
                                {provided.placeholder}
                            </Column>
                        )}
                    </Droppable>
                </Container>
                )}
            </Draggable>
        )
    }
}