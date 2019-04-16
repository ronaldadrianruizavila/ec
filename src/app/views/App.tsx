import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import About from './pages/About';
import { Link } from 'react-router-dom';
export default class App extends Component {

    render() {
        return (
            <div>
                <li>
                    <Link to={`/about`}>Nosotros</Link>
                </li>
                <Switch>
                    <Route exact path='/about' component={About} />
                </Switch>
            </div>);
    }
}