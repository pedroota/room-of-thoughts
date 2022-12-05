export interface ITask {
	id: string;
	status: 'to-do' | 'in-progress' | 'done';
	title: string;
	description: string;
}
