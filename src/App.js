import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import HomePage from './Pages/Home.js';
import JoinPage from './Pages/Join';
import CreatePage from './Pages/Create';
import NotFoundPage from './Pages/404';
import LobbyPage from './Pages/Lobby';

const Wrapper = styled.div`

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
            <Route exact path='/lobby:id' component={LobbyPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>        
      </Wrapper>
    );
  }
}

export default App;
