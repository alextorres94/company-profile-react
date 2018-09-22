import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)`
	color: #6ABB43;
	border: 1px solid #6ABB43;
	font-weight: 500;
  height: 40px;
  width: 100px;
  margin: 0 5px;
  background-color: transparent;
`;

class CustomButton extends Component {
	render() {
		return (
				<StyledButton>
					{this.props.text}
				</StyledButton>
		);
	}
}

export default CustomButton;

CustomButton.propTypes = {
	text: PropTypes.string
};