import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Link, withRouter } from 'react-router-dom';

import { DeleteButton } from '../DndColumn';
import { DndTaskProps, DndTaskState } from './types';

const Container = styled.div<{isDragging: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid lightgray;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: ${(props: any) => props.isDragging ? 'lightgreen' : 'white'};

    :last-child {
        margin-bottom: 0;
    }
`;

const CroppedSpan = styled.span`
    width: 70%;
    text-align: left;
    line-height: 22px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const RouterLink = styled(Link)`
    position: relative;
    width: 22px;
    height: 22px;
    padding: 0;
    margin: 0;
    margin-left: auto;
    border: 0;
    background-color: transparent;
    transform: rotate(45deg);
    cursor: default;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 5px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid lightgray;
        border-top: 0;
        transition: 0.3s;
    }

    &::before {
        content: '';
        position: absolute;
        right: 50%;
        bottom: 5px;
        transform: translateX(50%);
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid lightgray;
        border-bottom: 0;
        transition: 0.3s;
    }

    &:hover::after {
        border-bottom: 4px solid green;
    }

    &:hover::before {
        border-top: 4px solid green;
    }
`;

export const DndTask = withRouter(
    class DndTask extends React.PureComponent<DndTaskProps, DndTaskState> {
        constructor(props: DndTaskProps) {
            super(props);

            this.onDeleteTaskClick = this.onDeleteTaskClick.bind(this);
        };

        onDeleteTaskClick(): void {
            this.props.onDeleteTaskClick(this.props.task.id);
        };

        public render() {
            const { task, index } = this.props;
            const to = `/task/${task.id}`;
            const state = { background: this.props.location };

            return (
                <Draggable draggableId={task.id} index={index}>
                    {(provided, snapshot) => {

                        return <Container
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    isDragging={snapshot.isDragging}
                                >
                                    <CroppedSpan>
                                        {task.content}
                                    </CroppedSpan>
                                    <RouterLink to={{
                                            pathname: to,
                                            state: state
                                        }}/>
                                    <DeleteButton
                                        type='button'
                                        onClick={this.onDeleteTaskClick} />
                                </Container>
                    }}
                </Draggable>
            )
        }
    }
);