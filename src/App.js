import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { connect } from 'react-redux';
// import logo from './logo.svg';

import { DndContainer } from './Containers/DndContainer/index.tsx';
import { TaskModal } from './Containers/TaskModal';
import { Task } from './Containers/Task';

import './App.css';

export const App = connect(null, null)(
  function App() {
    const location = useLocation();
    const background = location.state && location.state.background;
    
    return (
      <div className="App">
        <main>
          <Switch location={background || location}>
            <Route exact path='/' component={DndContainer} />
            <Route path='/task/:id' component={Task} />
          </Switch>
          {background && <Route path='/task/:id' component={TaskModal} />}
        </main>
      </div>
    );
  }
)