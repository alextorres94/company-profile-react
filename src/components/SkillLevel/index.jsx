import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSkillLevel = styled.div`
	display: flex;
  flex-direction: column;
  width: 100px;
  margin: 20px 0;
  margin-right: 20px;
`;

const Level = styled.span`
	align-self: center;
  font-size: 10px;
  margin: 5px;
  color: grey;
`;


const Propriety = styled.span`	
	align-self: center;
`;

const StyledLevel = styled.div`
	& span {
	  background: #e77f2438;
	  border-radius: 5px;
	  width: 30px;
	  height: 5px;
	  display: inline-block;
	  margin: 0 1px;
	}
	
	& span:nth-child(1) {
	  background-color: ${(props) => props.level === 1 || props.level === 2 || props.level === 3 ? '#E77F24': ''};
	}
	& span:nth-child(2) {
	  background-color: ${(props) => props.level === 2 || props.level === 3 ? '#E77F24': ''};
	}
	& span:nth-child(3) {
	  background-color: ${(props) => props.level === 3 ? '#E77F24': ''};
	}
`;

class SkillLevel extends Component {
	render() {
		const levels = {
			1: 'Advanced',
			2: 'Safe to negotiate',
			3: 'Pro',
		};
		return (
			<StyledSkillLevel>
				<Level>
					{levels[this.props.level]}
				</Level>
				<StyledLevel
					level={this.props.level}
					>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
				</StyledLevel >
				<Propriety>
					{this.props.propriety}
				</Propriety>
			</StyledSkillLevel>
		);
	}
}

SkillLevel.propTypes = {
	propriety: PropTypes.string,
	level: PropTypes.string,
};

export default SkillLevel;

