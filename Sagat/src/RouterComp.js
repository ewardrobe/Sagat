import React, { Component } from 'react';
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import { Icon } from 'native-base';

import Login from './components/Login';
import Register from './components/Register';

class RouterComp extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene
						key="login"
						component={Login}
						hideNavBar={false}
						title="Login"
					/>
					<Scene
						key="register"
						component={Register}
						hideNavBar={false}
						title="Register"
					/>
				</Scene>
			</Router>
		);
	}
}

export default RouterComp;
