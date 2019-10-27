import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
	Container,
	Body,
	Header,
	Content,
	Text,
	FooterTab,
	Footer,
	Button
} from 'native-base';

class Profile extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content />
				<Footer>
					<FooterTab>
						<Button>
							<Text>Apps</Text>
						</Button>
						<Button>
							<Text>Camera</Text>
						</Button>
						<Button active>
							<Text>Navigate</Text>
						</Button>
						<Button>
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Profile;
