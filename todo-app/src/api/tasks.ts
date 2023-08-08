import axios from "axios";
import { ITaskModel } from "../components/TaskItem/type";

export default axios.create({
	baseURL: "http://localhost:3001/",
});

export const getTasksFromServer = async () => {
	const response = axios.get<ITaskModel[]>("http://localhost:3001/tasks");
	return (await response).data;
}

export const addTaskToServer = async (task: ITaskModel) => {
	axios.post("http://localhost:3001/tasks", task).catch(function (error) {
		console.log(error);
	});
}

export const updateTaskOnServer = async (task: ITaskModel) => {
	axios.put(`http://localhost:3001/tasks/${task.id}`, task).catch(function (error) {
		console.log(error);
	});
};

export const deleteTaskFromServer = async (id: ITaskModel['id']) => {
	axios.delete(`http://localhost:3001/tasks/${id}`).catch(function (error) {
		console.log(error);
	});
}
