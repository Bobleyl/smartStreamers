import React, { Component } from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
import Main from './components/main.js';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="SmartStreamers" scroll>
                <Navigation>
                    <Link to="/">Start</Link>
                    <Link to="/database">Database</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </Header>
            <Drawer title="SmartStreamers">
                <Navigation>
                    <Link to="/">Start</Link>
                    <Link to="/database">Database</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
       </div>

    );
  }
}

export default App;
