import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import PersonalInfo from './PersonalInfo';
import Languages from './Languages';

const Container = styled(Row)`
  display: flex;
  flex-direction: column;
`;

class Account extends Component {
	render() {
		return (
			<Container>
				<PersonalInfo {...this.props}/>
				<Languages {...this.props}/>
			</Container>
		);
	}
}

export default Account;
