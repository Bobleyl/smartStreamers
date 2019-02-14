import React, { Component } from 'react';
import './App.css';
import { Layout,Header,Navigation,Content } from 'react-mdl';
import Main from './components/main.js';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title="SmartStreamers" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/selection">Start</Link>
                    <Link to="/database">Database</Link>
                    <Link to="/about">About</Link>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
       </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
