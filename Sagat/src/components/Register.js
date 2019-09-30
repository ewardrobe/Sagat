import React, { Component } from 'react';
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
			email: '',
			password: '',
			confirmPassword: '',
			username: '',
			firstName: '',
			lastName: ''
		};
	}

	handleChangeUsername = username => this.setState({ username });
	handleChangeFirstname = firstName => this.setState({ firstName });
	handleChangeLastname = lastName => this.setState({ lastName });
	handleChangePassword = password => this.setState({ password });
	handleChangeCPassword = confirmPassword => this.setState({ confirmPassword });
	handleChangeEmail = email => this.setState({ email });

	handleRegister = () => {
		const {
			email,
			password,
			username,
			firstName,
			lastName,
			confirmPassword
		} = this.state;

		let validator = email.includes('@');
		if (validator) {
			axios
				.post('http://localhost:3000/users', {
					email,
					password,
					firstName,
					lastName,
					username,
					confirmPassword
				})
				.then(response => {
					if (response.status == 201) {
					}
					Actions.login();
				})
				.catch(() => {
					alert('user already exists');
					alert(response.data);
				});
		} else {
			alert('error error error');
		}
	};

	render() {
		return (
			<CommonContainer paddedContent={true}>
				<Form>
					<Item floatingLabel>
						<Label>Email</Label>

						<Input
							onChangeText={this.handleChangeEmail}
							value={this.state.email}
						/>
					</Item>

					<Item floatingLabel>
						<Label>Password</Label>

						<Input
							onChangeText={this.handleChangePassword}
							value={this.state.password}
							secureTextEntry
						/>
					</Item>

					<Item floatingLabel>
						<Label>Confirm Password</Label>

						<Input
							onChangeText={this.handleChangeCPassword}
							value={this.state.confirmPassword}
							secureTextEntry
						/>
					</Item>

					<Item floatingLabel>
						<Label>Username</Label>

						<Input
							onChangeText={this.handleChangeUsername}
							value={this.state.username}
						/>
					</Item>

					<Item floatingLabel>
						<Label>Firstname</Label>

						<Input
							onChangeText={this.handleChangeFirstname}
							value={this.state.firstName}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Lastname</Label>

						<Input
							onChangeText={this.handleChangeLastname}
							value={this.state.lastName}
						/>
					</Item>

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
