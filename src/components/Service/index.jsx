import React, { Component } from 'react';
import styled from 'styled-components';

const StyledService = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
	border-bottom: 1px solid #b4b4b35c;
`;

const Title = styled.h4`
	color: #6ABB43;
`;

const Show = styled.a`
	color: #6ABB43;
	cursor: pointer;
	font-weight: 500;
  text-decoration: none !important;
`;

class Service extends Component {
	render() {
		console.log('props:', this.props);

		return (
			<StyledService>
				<Title>
					{this.props.title}
				</Title>

				<Show onClick={() => {}}>
					Show <i className={'fas fa-angle-down'}/>
				</Show>
			</StyledService>
		);
	}
}

export default Service;

