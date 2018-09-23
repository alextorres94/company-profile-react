import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.div`
	border-bottom: 1px solid #b4b4b35c;
`;

const StyledService = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f7f6;
  padding: 10px;
¡`;

const Title = styled.h4`
`;

const SubTitle = styled.h5`
	font-weight: 700;
	margin-left: 20px;
`;

const Info = styled.span`
	padding: 20px 0;
`;

const Price = styled.span`
	padding: 10px 0;
`;

const Stars = styled.span`
	color: #f7dc7178;
	padding-right: 10px;
	
	& i {
		float:right;
		cursor: pointer;
		margin: 2px;
		
		&:hover, 
		 :hover ~ i,
		 :focus,
		 :focus ~ i {
				color: #f7dc71;
			}
	}
	
`;

const Show = styled.a`
	color: #6ABB43;
	cursor: pointer;
	font-weight: 500;
  text-decoration: none !important;
`;

class Service extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false
		};
	}

	handleShow = () => this.setState({show: !this.state.show});

	render() {
		let action = { label: 'Show', icon: 'down'};
		if (this.state.show) action = { label: 'Hide', icon: 'up'};

		return (
			<Section>
				<StyledService>
					<Title>
						{this.props.title}
					</Title>

					<Show onClick={this.handleShow}>
						{action.label} <i className={`fas fa-angle-${action.icon}`}/>
					</Show>
				</StyledService>

				{this.renderInfo()}
				{this.renderPrice()}
			</Section>
		);
	}

	renderInfo() {
		if(this.state.show) return null;
		return(
			<StyledInfo>
				<Info>
					(-)
					<Stars>
						<i className={'fas fa-star'}/>
						<i className={'fas fa-star'}/>
						<i className={'fas fa-star'}/>
						<i className={'fas fa-star'}/>
						<i className={'fas fa-star'}/>
					</Stars>
				</Info>
				<SubTitle>
					{this.props.price} {this.props.currency} per hour
				</SubTitle>
			</StyledInfo>
		)
	}

	renderPrice() {
		if(!this.state.show) return null;
		return(
			<StyledPrice>
				<Price>
					Fee
				</Price>
				<SubTitle>
					{this.props.price} {this.props.currency} per hour
				</SubTitle>
			</StyledPrice>
		)
	}
}

export default Service;

