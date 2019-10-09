import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import { DndTaskProps, DndTaskState } from './types';

import { DeleteButton } from '../DndColumn';

const Container = styled.div`
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export class DndTask extends React.PureComponent<DndTaskProps, DndTaskState> {
    constructor(props: DndTaskProps) {
        super(props);

        this.onDeleteTaskClick = this.onDeleteTaskClick.bind(this);
    };

    onDeleteTaskClick(): void {
        this.props.onDeleteTaskClick(this.props.task.id);
    };

    public render() {
        const { task, index } = this.props;

        return (
            <Draggable draggableId={task.id} index={index}>
                {(provided, snapshot) => {
                    // @ts-ignore

                    return <Container
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                isDragging={snapshot.isDragging}
                            >
                                <CroppedSpan>
                                    {task.content}
                                </CroppedSpan>
                                <DeleteButton
                                    type='button'
                                    onClick={this.onDeleteTaskClick} />
                            </Container>
                }}
            </Draggable>
        )
    }
}