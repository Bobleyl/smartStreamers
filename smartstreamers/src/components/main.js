import React from 'react';
import LandingPage from './landingpage';
import Database from './database';
import Results from './results';
import Selection from './selection';
import About from './about';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/database" component={Database} />
        <Route path="/results" component={Results} />
        <Route path="/selection" component={Selection} />
        <Route path="/about" component={About} />
    </Switch>
)

export default Main;