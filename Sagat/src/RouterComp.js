import React, { Component } from 'react';
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux';
import { Icon } from 'native-base';

import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

class RouterComp extends Component {
	render() {
		return (
			<Router>
				<Scene key="root" hideNavBar>
					<Scene
						key="login"
						component={Login}
						hideNavBar={false}
						title="Login"
						hideNavBar
					/>
					<Scene
						key="register"
						component={Register}
						hideNavBar={false}
						title="Register"
						hideNavBar
					/>
					<Scene
						key="profile"
						component={Profile}
						hideNavBar={false}
						title="Profile"
						hideNavBar
					/>
				</Scene>
			</Router>
		);
	}
}

export default RouterComp;
