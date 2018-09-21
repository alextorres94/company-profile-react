import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
	color: #6ABB43;
	border: 1px solid #6ABB43;
	font-weight: 500;
  height: 35px;
  width: 100px;
  margin: 0 5px;
`;

class Header extends Component {
	render() {
		return (
				<StyledButton>
					{this.props.text}
				</StyledButton>
		);
	}
}

export default Header;
