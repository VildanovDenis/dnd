import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import { DndColumnProps, DndColumnState } from './types';
import { Task } from '../../Data/types';

import { DndTask } from '../DndTask';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    max-height: 100%;
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

const Column = styled.div`
    max-height: calc(100% - 22px - 10px);
    flex: 1 1 100%;
    padding: 8px;
    transition: background-color 0.3s ease;
    background-color: ${(props: any) => props.isDraggingOver ? 'skyblue' : 'white'};
    overflow-y: auto;
`;

const Title = styled.h3`
    flex-shrink: 0;
    padding: 8px;
    margin-top: 0;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export class DndColumn extends React.PureComponent<DndColumnProps, DndColumnState> {
    public render() {
        const { column, tasks } = this.props;

        return (
            <Container>
                <Title>{column.title}</Title>
                <Droppable droppableId={column.id}>
                    {(provided, shapshot) => (
                        // @ts-ignore
                        <Column
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={shapshot.isDraggingOver}
                        >

                            {tasks.map((task: Task, index: number) => (
                                <DndTask key={task.id} task={task} index={index}/>
                            ))}
                            {provided.placeholder}
                        </Column>
                    )}
                </Droppable>
            </Container>
        )
    }
}