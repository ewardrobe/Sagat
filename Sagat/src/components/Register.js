import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
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
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
	LoadingButton,
	ContentSpinner,
	CommonContainer,
	CommonField,
	TransparentButton
} from '../Common';

class Register extends Component {
	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input value={this.props.email} />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input value={this.props.password} secureTextEntry />
						</Item>
						<Button primary full style={{ marginTop: 50 }}>
							<Text>Login</Text>
						</Button>
						<Button
							primary
							full
							onPress={() => Actions.register()}
							style={{ marginTop: 20 }}
						>
							<Text>Register</Text>
						</Button>
						<Button transparent full style={{ marginTop: 10 }}>
							<Text>Forgot Password</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return { state };
}

export default compose(
	connect(
		mapStateToProps,
		actions
	),
	reduxForm({ form: 'register' })
)(Register);
