import React, { Component } from 'react';
import logoImg from '../../assets/img/logo.png';
import styled from 'styled-components';
import Menu from '../Menu';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
`;

const Logo = styled.img`
	width: 200px;
	height: 50px;
  justify-content: start;	
	background-image: url(${logoImg});
  background-size: cover;
`;


class Header extends Component {
	render() {
		return (
			<Container>
				<Logo
					onClick={() => alert('Go home!')}
				/>

				<Menu/>
			</Container>
		);
	}
}

export default Header;
