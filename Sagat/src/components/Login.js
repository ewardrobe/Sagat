import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Logo from './Logo';

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

import {
	CommonContainer,
	CommonField,
	LoadingButton,
	TransparentButton
} from '../Common';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChangeEmail = text => {
		this.setState(() => {
			return {
				email: text
			};
		});
	};

	handleChangePassword = text => {
		this.setState(() => {
			return {
				password: text
			};
		});
	};

	handleLogin = () => {
		const { email, password } = this.state;
		if (email && password) {
			axios
				.post('http://localhost:3000/auth', {
					email,
					password
				})
				.then(response => {
					alert('successful');
					Actions.profile();
				})
				.catch(() => {
					alert('wrong username or password');
				});
		} else {
			alert('username and password field are both required');
		}
	};

	render() {
		return (
			<CommonContainer paddedContent={true}>
				<Logo />
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
					<LoadingButton onPress={this.handleLogin} text="Login" />
					<LoadingButton onPress={() => Actions.register()} text="Sign Up" />
					<TransparentButton text="Forgot Password?" />
				</Form>
			</CommonContainer>
		);
	}
}

export default Login;
