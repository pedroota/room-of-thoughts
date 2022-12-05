export interface Task {
	id: string;
	title: string;
	description: string;
	status: 'to-do' | 'in-progress' | 'done';
	createdAt?: string;
	updatedAt?: string;
	userId: string;
}
