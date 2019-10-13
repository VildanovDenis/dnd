import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Portal } from '../../hoc/Portal';

import { State } from '../../Store/types';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const ModalBg = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.5;
    z-index: 10;
    cursor: initial;
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 400px;
    height: 250px;
    padding: 15px;
    border-radius: 10px;
    background-color: white;
    z-index: 11;
`;

const mapStateToProps = (state: State) => {
    return {
        srumData: state.scrumDataReducer
    }
}

export const TaskModal = connect(mapStateToProps, null)(
    class DndTaskModal extends React.PureComponent<any, any> {
        constructor(props: any) {
            super(props);

            this.state = {
                taskId: ''
            };

            this.onBackClick = this.onBackClick.bind(this);
        }

        componentDidMount() {
            this.setState({
                taskId: this.props.match.params.id
            });
        }

        onBackClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
            e.preventDefault();
            e.stopPropagation();
            this.props.history.goBack();

        }

        render() {

            return (
                <Portal>
                    <ModalContainer>
                        <ModalContent>
                            <h3>tasktask</h3>
                            <Link to='/' onClick={this.onBackClick}>Назад</Link>
                        </ModalContent>
                        <ModalBg to='/' onClick={this.onBackClick}/>
                    </ModalContainer>
                </Portal>
            )
        }
    }
)