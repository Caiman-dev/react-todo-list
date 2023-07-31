export type ITaskModel = {
	id: number;
	parentId: number | null;
	description: string;
	isCompleted: boolean;
};