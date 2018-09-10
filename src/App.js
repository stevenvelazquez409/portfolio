import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title="Steven's Portfolio" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Content>
                <Main />
            </Content>
        </Layout>
        </div>
    );
  }
}

export default App;
