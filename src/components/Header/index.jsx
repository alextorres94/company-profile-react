import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import logoImg from '../../assets/img/logo.png';
import Menu from '../Menu';

const Container = styled(Col)`
	display: flex;
	justify-content: space-between;
`;

const Logo = styled.div`
	width: 200px;
	height: 50px;
	cursor:pointer;
  justify-content: start;	
	background-image: url(${logoImg});
  background-size: cover;
`;


class Header extends Component {
	render() {
		return (
			<Container md={12}>
				<Logo
					onClick={() => alert('Go home!')}
				/>
				<Menu/>
			</Container>
		);
	}
}

export default Header;
