import React, { Component } from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import avatar from '../../assets/img/avatar.png';

const Container = styled(Col)`
	display: flex;
  border-bottom: 1px solid #b4b4b35c;
`;

const StyledAvatar = styled(Col)`
	height: 200px;
	margin: 0 20px;
	border-radius: 50%;
	background-image: url(${(props) => props.photo ? props.photo : avatar});
  background-size: cover;
`;

const Available = styled.div`
	width: 80px;
  height: 60px;
	color: #ffffff;
  background-color: ${(props) => props.available ? "#6ABB43" : "red"};
	border-radius: 5px;
	text-align: center;
  display: flex;
	flex-direction: column;
  justify-content: center;
    
  & i {
  	margin: 10px;
  }
`;

const Gender = styled.div`
	width: 100px;
	color: grey;
  background-color: transparent;
	border-radius: 20px;
  display: flex;
	flex-direction: row;
  justify-content: center;
  border: 1px solid grey;
  margin: 30px 0;

    & i {
    font-size: 18px;
    padding: 5px;
  	align-self: center;
  }
    & p {
    margin: 0;
  	align-self: center;
  }
`;

const Title = styled.h4`
	font-weight: 600;
	margin-bottom: 20px;
	font-size: 20px;
`;

const Address = styled.label`
	color: grey;
	font-weight: 400;
	margin: 10px 0;
`;

const OtherInfo = styled.label`
	color: grey;
	display: flex;
	align-items: center;
    & i {
    font-size: 18px;
    padding: 6px;
  	align-self: center;
  	margin-right: 5px;
  }
  & a {
  	color: #6ABB43;
    font-weight: 300;
  }
  & label {
  	font-weight: 300;
  }
`;

class PersonalInfo extends Component {
	render() {
		return (
			<Container md={12}>
				<StyledAvatar sm={4} md={4} photo={this.props.photo}/>
				<Col md={6} sm={12}>
					<Title>
						{this.props.category} {this.props.name}
					</Title>
					{this.renderAgeAndSex()}
					<h4>
						{this.props.name}
					</h4>
					<Address>
						{this.props.address}
					</Address>
					{this.renderOtherInfo()}
				</Col>
				<Col md={2} sm={12}>
					{this.renderAvailable()}
				</Col>
		</Container>
		);
	}

	renderAvailable() {
		let icon = 'check';
		if (!this.props.available) icon = 'times';
		return(
			<Available
				available={this.props.available}
			>
				<i className={`fas fa-${icon}`}></i>
				<p>Available</p>
			</Available>
		);
	}

	renderAgeAndSex() {
		let icon = 'venus';
		if (!this.props.gender === 'male') icon = 'mars';
		return(
			<Gender
				available={this.props.available}
			>
				<i className={`fas fa-${icon}`}/>
				<p>{this.props.age} years</p>
			</Gender>
		);
	}

	renderOtherInfo() {
		return(
			<div>
				<OtherInfo>
					<i className={`fas fa-phone`}/>
					<label>{this.props.phone} {this.props.otherPhone}</label>
				</OtherInfo>

				<OtherInfo>
					<i className={`fas fa-at`}/>
					<label>{this.props.email}</label>
				</OtherInfo>

				<OtherInfo>
					<i className={`fas fa-globe`}/>
					<a href={this.props.web}>{this.props.web}</a>
				</OtherInfo>
			</div>
		);
	}
}

export default PersonalInfo;
