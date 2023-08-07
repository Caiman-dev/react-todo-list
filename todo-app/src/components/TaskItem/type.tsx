export type ITaskModel = {
	id: string;
	parentId: string | null;
	description: string;
	isCompleted: boolean;
	color: string;
};