import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Account from '../../components/Account';
import Services from '../../components/Services';

class Profile extends Component {
	render() {
		return (
			<Row>
				<Col md={7}>
					<Account
						{...this.props}
					/>
				</Col>
				<Col md={5}>
					<Services
						{...this.props}
					/>
				</Col>
			</Row>
		);
	}
}

export default Profile;
