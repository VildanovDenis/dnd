import React from 'react';
import { Link } from 'react-router-dom';

export class Task extends React.PureComponent<any, any> {
    render() {
        return (
            <div style={{background: 'red'}}>
                task task task
                <Link to='/'>go to main</Link>
            </div>
        )
    }
}