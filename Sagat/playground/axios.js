const axios = require('axios');

let config = {
	headers: { 'Content-Type': 'application/json' }
};

let data = {
	username: 'tyrone',
	firstName: 'austin',
	lastName: 'marks',
	password: 'austin123',
	passwordConfirm: 'austin123',
	email: 'mary@live.com'
};

axios
	.post('http://localhost:3000/users', data)
	.then(response => {
		console.log('successful');
	})
	.catch(err => {
		console.log(err);
		console.log('already exists');
	});

/*axios
	.post('http://localhost:3090/signin', data)
	.then(response => {
		console.log(response.data.token);
	})
	.catch(err => {
		console.log('user details incorrect');
	});

/*axios
	.get('http://localhost:3090/private/private', {
		headers: {
			'x-auth':
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZDdhOWUyNGIxOGViNTY3YWM5MDhlMDkiLCJpYXQiOjE1NjgzMjYyODM4NTl9.cybYLTmdMliyreqITc79ysEw20D-PFLEUkOHA83PCAY'
		}
	})
	.then(response => {
		console.log(response.data);
	})
	.catch(err => {
		console.log(err);
	});*/
