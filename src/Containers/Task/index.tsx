import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { State, ReduxDispatch } from '../../Store/types';

import { getScrumData } from '../../Store/Action/scrum-data';
import { dataStatuses } from '../../Data/dataStatuses';

const TaskContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const TaskContent = styled.div`
    width: 400px;
    padding: 8px;
`;

const mapStateToProps = (state: State) => {
    return {
        scrumData: state.scrumDataReducer
    }
}

const mapDispatchToProps = (dispatch: ReduxDispatch): any => (
    bindActionCreators({
        getScrumData: getScrumData
    }, dispatch)
)

export const Task = connect(mapStateToProps, mapDispatchToProps)(
    class Task extends React.PureComponent<any, any> {
        constructor(props: any) {
            super(props);

            this.state = {
                taskId: ''
            }
        }

        componentDidMount() {
            const { params } = this.props.match;

            if (params.id) {
                this.setState({
                    taskId: params.id
                });
            }

            if (this.props.scrumData.dataStatus === dataStatuses.success) {
                return
            } else {
                this.props.getScrumData(this.props.scrumData.dataStatus);
            }
        }

        render() {
            const { data, dataStatus } = this.props.scrumData;
            const task = data.tasks[this.state.taskId];

            if (dataStatus === dataStatuses.fetching) {
                return (
                    <TaskContainer>
                        <TaskContent>
                            <p>Loading...</p>
                            <Link to='/'>go to main</Link>
                    </TaskContent>
                </TaskContainer>    
                )
            }

            if (task === undefined) {
                return (
                    <TaskContainer>
                        <TaskContent>
                            <p>This task is not available.</p>
                            <Link to='/'>go to main</Link>
                    </TaskContent>
                </TaskContainer>    
                )
            }

            return (
                <TaskContainer>
                    <TaskContent>
                        <p>{task.content}</p>
                        <Link to='/'>go to main</Link>
                    </TaskContent>
                </TaskContainer>
            )
        }
    }
);