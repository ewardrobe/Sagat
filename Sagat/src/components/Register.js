import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	Container,
	Body,
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Title,
	Button,
	Text
} from 'native-base';
import axios from 'axios';

import {
	LoadingButton,
	ContentSpinner,
	CommonContainer,
	CommonText,
	CommonField,
	TransparentButton
} from '../Common';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			firstName: '',
			lastName: '',
			password: '',
			passwordConfirm: '',
			email: ''
		};
	}

	handleChangeUsername = username => this.setState({ username });
	handleChangeFirstname = firstName => this.setState({ firstName });
	handleChangeLastname = lastName => this.setState({ lastName });
	handleChangePassword = password => this.setState({ password });
	handleChangeCPassword = passwordConfirm => this.setState({ passwordConfirm });
	handleChangeEmail = email => this.setState({ email });

	handleRegister = () => {
		Keyboard.dismiss();
		const {
			username,
			firstName,
			lastName,
			password,
			passwordConfirm,
			email
		} = this.state;

		//	let lowerCaseEmail = email.toLowerCase();

		//let validator = lowerCaseEmail.includes('@');

		axios
			.post('http://localhost:3000/users', {
				username,
				firstName,
				lastName,
				password,
				passwordConfirm,
				email
			})
			.then(response => {
				Actions.login();
			})
			.catch(() => {
				alert('errors');
			});
	};

	render() {
		return (
			<CommonContainer paddedContent={true}>
				<CommonText text="Sign Up" />

				<Form>
					<CommonField
						onChangeText={this.handleChangeEmail}
						value={this.state.email}
						label="Email"
					/>

					<CommonField
						onChangeText={this.handleChangePassword}
						value={this.state.password}
						label="Password"
						secureTextEntry
					/>

					<CommonField
						onChangeText={this.handleChangeCPassword}
						value={this.state.confirmPassword}
						secureTextEntry
						label="Confirm Password"
					/>

					<CommonField
						onChangeText={this.handleChangeUsername}
						value={this.state.username}
						label="Username"
					/>

					<CommonField
						onChangeText={this.handleChangeFirstname}
						value={this.state.firstName}
						label="Firstname"
					/>

					<CommonField
						onChangeText={this.handleChangeLastname}
						value={this.state.lastName}
						label="Lastname"
					/>

					<Button
						primary
						full
						onPress={this.handleRegister}
						style={{ marginTop: 20 }}
					>
						<Text>Register</Text>
					</Button>

					<Button transparent full style={{ marginTop: 10 }}>
						<Text>Forgot Password</Text>
					</Button>
				</Form>
			</CommonContainer>
		);
	}
}

export default Register;
