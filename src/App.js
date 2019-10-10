import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { connect } from 'react-redux';
// import logo from './logo.svg';

import { DndContainer } from './Containers/DndContainer/index.tsx';
import { TaskModal } from './Containers/TaskModal';
import { Task } from './Containers/Task';

import './App.css';

const mapStateToProps = (state) => ({
  routerData: state.routerDataReducer
})

export const App = connect(mapStateToProps, null)(
  function App(props) {
    
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <main>
          <Switch>
            <Route exact path='/' component={DndContainer} />
            <Route path='/task/:id' component={props.routerData.isModalShow ? TaskModal : Task} />
          </Switch>
        </main>
      </div>
    );
  }
)