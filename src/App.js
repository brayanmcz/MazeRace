import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import HomePage from './Pages/Home.js';
import JoinPage from './Pages/Join';
import CreatePage from './Pages/Create';
import NotFoundPage from './Pages/404';
import LobbyPage from './Pages/Lobby';
// import Maze from './Pages/Maze';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(purple, blue);
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/join" component={JoinPage} />
            <Route exact path='/create' component={CreatePage} />
            <Route exact path='/lobby/:id' component={LobbyPage} />
            <Route exact path='/game/:id' component={Maze} />
            
            <Route component={NotFoundPage} />
          </Switch>
        </Router>        
      </Wrapper>
    );
  }
}

export default App;