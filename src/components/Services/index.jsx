import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import Service from '../Service';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const Title = styled.h3`
`;

const StyledServices = styled(Col)`
  display: flex;
  flex-direction: column;
`;

class Services extends Component {
	render() {
		return (
			<Container md={12}>
				<Title>
					Services
				</Title>
				<StyledServices>
					{this.renderServices()}
				</StyledServices>
			</Container>
		);
	}

	renderServices() {
		let services =  this.props.services;
		return services.map((value, key) =>
			<Service
				key={key}
				title={value.title}
				price={value.price}
				currency={this.props.currency}
			/>);
	}
}

export default Services;
