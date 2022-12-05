import { Server, Model, Factory, Response, belongsTo, hasMany } from 'miragejs';
import user from './routes/user';
import * as task from './routes/task';

export const handleErrors = (error: any, message = 'An error ocurred') => {
	console.error('Error: ', error);
	return new Response(400, undefined, {
		data: {
			message,
			isError: true,
		},
	});
};

export const setupServer = (env?: string): Server => {
	return new Server({
		environment: env ?? 'development',

		models: {
			task: Model.extend({
				user: belongsTo(),
			}),
			user: Model.extend({
				task: hasMany(),
			}),
		},

		factories: {
			user: Factory.extend({
				username: 'test',
				password: 'password',
				email: 'test@email.com',
			}),
		},

		seeds: (server): any => {
			server.create('user');
		},

		routes(): void {
			this.urlPrefix = 'https://room.test';

			this.post('/auth/login', user.login);
			this.post('/auth/signup', user.signup);

			this.post('/journals/', task.create);
		},
	});
};
