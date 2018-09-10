import React from 'react';
import Home from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
)

export default Main;
