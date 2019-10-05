import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgray;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: ${(props: any) => props.isDragging ? 'lightgreen' : 'white'};

    :last-child {
        margin-bottom: 0;
    }
`;

export class DndTask extends React.PureComponent<any, any> {
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
                                {task.content}
                            </Container>
                }}
            </Draggable>
        )
    }
}