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

const StyledItems = styled(Col)`
  display: flex;
  flex-direction: row;
    color: grey;

`;

const StyledValue = styled(Col)`
  display: flex;
  flex-direction: row;
  color:red

`;

class MoreInfo extends Component {
	render() {
		const moreInfo = [{
			uno: 'este es el uno',
			dos: 'sssssl dosssss',
			tres: 'el tresss',
		}];
		return (
			<Container md={12}>
				<Title>
					{this.props.title}
				</Title>
				<Row>
					{moreInfo.map((item) => {
						<div>
							<StyledItems md={6}>
							{item}
							</StyledItems>

							<StyledValue md={6}>
								{moreInfo[item]}
							</StyledValue>
						</div>
					})}

				</Row>
			</Container>
		);
	}

	renderLanguages() {
		let languages =  this.props.languages;
		return
	}
}

export default MoreInfo;
