import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import { DndTask } from '../DndTask';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

const Column = styled.div`
    flex-grow: 1;
    padding: 8px;
    transition: background-color 0.3s ease;
    background-color: ${(props: any) => props.isDraggingOver ? 'skyblue' : 'white'};
    overflow-y: auto;
`;

const Title = styled.h3`
    padding: 8px;
`;

export class DndColumn extends React.PureComponent<any, any> {
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

                            {tasks.map((task: any, index: number) => (
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