import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { Portal } from '../../hoc/Portal';

import { setRouterData } from '../../Store/Action/router-data';

import { ReduxDispatch, State } from '../../Store/types';
import { RouterDataState } from '../../Store/Reducer/router-data/types';

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
    // background-color: red;
    // opacity: 0.5;
    z-index: 10;
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
        routerData: state.routerDataReducer,
        srumData: state.scrumDataReducer
    }
}

const mapDispatchToProps = (dispatch: ReduxDispatch) => (
    bindActionCreators(
        {
            setRouterData: setRouterData
        }, dispatch
    )
)

export const TaskModal = connect(mapStateToProps, mapDispatchToProps)(
    class DndTaskModal extends React.PureComponent<any, any> {
        constructor(props: any) {
            super(props);

            this.state = {
                taskId: ''
            };

            this.onLinkClick = this.onLinkClick.bind(this);
        }

        componentDidMount() {
            this.setState({
                taskId: this.props.match.params.id
            });
        }

        onLinkClick() {
            const newRouterData: RouterDataState = {
                isModalShow: false
            };

            this.props.setRouterData(newRouterData)
        }

        render() {

            return (
                <Portal>
                    <ModalContainer>
                        <ModalContent>
                            <h3>tasktask</h3>
                            <Link to='/' onClick={this.onLinkClick}>123</Link>
                        </ModalContent>
                        <ModalBg to='/' />
                    </ModalContainer>
                </Portal>
            )
        }
    }
)