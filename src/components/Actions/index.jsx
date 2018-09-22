import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import Button from '../Button';

const Container = styled(Col)`
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #b4b4b35c;
`;

const Title = styled.span`
	font-weight: 500;
  font-size: 24px;
`;

const StyledActions = styled.div``;

class Actions extends Component {
	render() {
		return (
			<Container md={12}>
				<Title>
					PROFILE
				</Title>
				<StyledActions>
					<Button
						text='Back'
					/>
					<Button
						text='Edit profile'
					/>
					<Button
						text='Edit offer'
					/>
				</StyledActions>
			</Container>
		);
	}
}

export default Actions;
