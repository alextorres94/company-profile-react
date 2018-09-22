import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Header from './components/Header';
import Actions from './components/Actions';
import Profile from './scenes/Profile';
import { getData } from './actions';

const Container = styled(Row)`
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  background-Color: #F8F7F6;
`;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		getData()
			.then((response) => {
				this.setState({data: response.data})
			});
	}

  render() {
		if(!this.state.data) return null;
	  return (
      <Container>
        <Row>
	        <Header/>
        </Row>
	      <Row>
	        <Actions/>
	      </Row>
	      <Profile
	        {...this.state.data}
	      />
      </Container>
    );
  }
}

export default App;
