import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding: 30px 0;
  margin: 30px 0;
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
			<Container>
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
