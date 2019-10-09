import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { TaskAddState, TaskAddProps } from './types';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px;
`;

const Input = styled.input`
    width: 70%;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 4px;

    :disabled {
        opacity: 0.7;
    }
`;

export class TaskAdd extends React.PureComponent<TaskAddProps, TaskAddState> {
    constructor(props: TaskAddProps) {
        super(props);

        this.state = {
            taskContent: ''
        };

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onTaskChange(e: ChangeEvent<HTMLInputElement>): void {
        const value: string = e.target.value;

        this.setState({
            taskContent: value
        });
    }

    onButtonClick() {
        const { taskContent } = this.state;

        if (!taskContent) {
            return
        }

        const { columnId, onAddTaskClick } = this.props;

        onAddTaskClick(columnId, taskContent);

        this.setState({
            taskContent: ''
        });
    }

    public render() {
        const { taskContent } = this.state;

        return (
            <Container>
                <Input value={taskContent} onChange={this.onTaskChange}/>
                <Button onClick={this.onButtonClick} disabled={!Boolean(taskContent)}>Добавить</Button>
            </Container>
        )
    }
}