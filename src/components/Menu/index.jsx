import React, { Component } from 'react';
import styled from 'styled-components';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const StyledNavbar = styled(Nav)`
display: flex;
justify-content: flex-end;
align-items: center;
border-top: 1px solid #6ABB43;
`;

const StyledNavDropdown = styled(NavDropdown)`
& #basic-nav-dropdown {
color: black;
}

  & #basic-nav-dropdown:hover {
  color: black;
    background-color: initial;
  }
`;


class Header extends Component {
	render() {
		return (
				<StyledNavbar>
					<StyledNavDropdown title="Order Overview" id="basic-nav-dropdown">
						<MenuItem>Action</MenuItem>
						<MenuItem>Another action</MenuItem>
						<MenuItem>Something else here</MenuItem>
						<MenuItem>Separated link</MenuItem>
					</StyledNavDropdown>
				</StyledNavbar>
		);
	}
}

export default Header;
