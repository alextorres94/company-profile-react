import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import SkillLevel from '../SkillLevel';

const Container = styled(Col)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #b4b4b35c;
`;

const Title = styled.h4`
  color: #6ABB43;
`;

const StyledLanguages = styled(Col)`
  display: flex;
  flex-direction: row;
`;

class Languages extends Component {
	render() {
		return (
			<Container md={12}>
				<Title>
					{this.props.title}
				</Title>
				<StyledLanguages>
					{this.renderLanguages()}
				</StyledLanguages>
			</Container>
		);
	}

	renderLanguages() {
		let languages =  this.props.languages;
		return (Object.keys(languages).map((key) => <SkillLevel key={key} level={languages[key]} propriety={key}/>));
	}
}

export default Languages;
