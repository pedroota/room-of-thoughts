import { Response, Request } from 'miragejs';
import { handleErrors } from '../server';
import { Task } from '../../../interfaces/task.interface';
import { User } from '../../../interfaces/user.interface';
import dayjs from 'dayjs';

export const create = (
	schema: any,
	req: Request
): { user: User; task: Task } | Response => {
	try {
		const { title, userId } = JSON.parse(req.requestBody) as Partial<Task>;
		const exUser = schema.users.findBy({ id: userId });
		console.log(exUser);
		if (!exUser) {
			return handleErrors(null, 'No such user exists.');
		}
		const now = dayjs().format();
		const task = exUser.createTask({
			title,
			type: 'public',
			createdAt: now,
			updatedAt: now,
		});
		return {
			user: {
				...exUser.attrs,
			},
			task: task.attrs,
		};
	} catch (error) {
		return handleErrors(error, 'Failed to create Task.');
	}
};
