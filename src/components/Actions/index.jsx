import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import Button from '../Button';
import PropTypes from 'prop-types';

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
					{this.props.title}
				</Title>
				<StyledActions>
					<Button
						text='Back'
						onClick={() => alert('Back')}
					/>
					<Button
						text='Edit profile'
						onClick={() => alert('Edit profile')}
					/>
					<Button
						text='Edit offer'
						onClick={() => alert('Edit offer')}
					/>
				</StyledActions>
			</Container>
		);
	}
}

Actions.propTypes = {
	title: PropTypes.string
};

export default Actions;
