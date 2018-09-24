import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import PersonalInfo from './PersonalInfo';
import Languages from './Languages';
import Qualifications from './MoreInfo';
import GeographicalCover from './MoreInfo';
import BankAccount from './MoreInfo';

const Container = styled(Row)`
  display: flex;
  flex-direction: column;
`;

class Account extends Component {
	render() {
		return (
			<Container>
				<PersonalInfo 
					{...this.props}/>
				<Languages
					title='LANGUAGES'
					{...this.props}/>
				<Qualifications
					title='QUALIFICATIONS'
					{...this.props}
				/>
				<GeographicalCover
					title='QUALIFICATIONS'
					{...this.props}
				/>
				<BankAccount
					title='Bank Account'
					{...this.props}
				/>
			</Container>
		);
	}
}

export default Account;
