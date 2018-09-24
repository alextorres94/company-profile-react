import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #b4b4b35c;
`;

const Title = styled.h4`
  color: #6ABB43;
`;

class MoreInfo extends Component {
	render() {
		return (
			<Container md={12}>
				<Title>
					{this.props.title}
				</Title>
				<Row>
					Api info
				</Row>
			</Container>
		);
	}
}

export default MoreInfo;
