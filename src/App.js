import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './scenes/Profile';
import Header from './components/Header';
import Actions from './components/Actions';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  background-Color: #F8F7F6;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
	      <Actions/>
	      <Profile/>
      </Container>
    );
  }
}

export default App;
