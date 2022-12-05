export interface User {
	id: string;
	username: string;
	email: string;
	taskIds: string[] | null;
	token: string;
}
