import React from "react";
import Box from '@mui/material/Box';
import { TaskList } from "../TaskList";
import { SubTaskList } from "../SubTaskList";
import { ITaskModel } from "../TaskItem/type";
import api, { arr } from "../../api/tasks";
import "./Todo.css";

// const DEFAULT_TASKS: ITaskModel[] | null = [
// 	{ id: 1, parentId: null, description: 'Помыть посуду', isCompleted: false },
// 	{ id: 2, parentId: null, description: 'Купить яблоки', isCompleted: false },
// 	{ id: 3, parentId: null, description: 'Поменять фильтры', isCompleted: false },
// 	{ id: 4, parentId: null, description: 'Помыть яблоки', isCompleted: false },
// 	{ id: 5, parentId: null, description: 'Сварить варенье', isCompleted: false },
// 	{ id: 6, parentId: 1, description: 'subtask 1', isCompleted: false },
// 	{ id: 7, parentId: 1, description: 'subtask 2', isCompleted: false },
// 	{ id: 8, parentId: 2, description: 'subtask 3', isCompleted: false },
// 	{ id: 9, parentId: 2, description: 'subtask 4', isCompleted: false },
// 	{ id: 10, parentId: 3, description: 'subtask 5', isCompleted: false },
// 	{ id: 11, parentId: 3, description: 'subtask 6', isCompleted: false },
// 	{ id: 12, parentId: 4, description: 'subtask 7', isCompleted: false },
// 	{ id: 13, parentId: 4, description: 'subtask 8', isCompleted: false },
// 	{ id: 14, parentId: 5, description: 'subtask 9', isCompleted: false },
// 	{ id: 15, parentId: 5, description: 'subtask 10', isCompleted: false },
// ];

export const Todo = () => {
	const [tasks, setTasks] = React.useState<ITaskModel[] | null>();
	const [taskList, setTaskList] = React.useState<ITaskModel[] | null>(null);
	const [subTaskList, setSubTaskList] = React.useState<ITaskModel[] | null>(null);
	const [parentId, setParentId] = React.useState<ITaskModel['id'] | null>(null);
	const [parentDescription, setParentDescription] = React.useState<ITaskModel['description'] | null>(null);

	const getApiTasks = async () => {
		const response = await api.get<ITaskModel[] | null>("/tasks");
		if (response.data) {
			setTasks(response.data);
		}
	};

	React.useEffect(() => {
		arr();
		getApiTasks();
	}, []);

	React.useEffect(() => {
		if (tasks) {
			setTaskList(tasks.filter((task) => task.parentId === null));
			setSubTaskList(tasks.filter((task) => task.parentId !== null));
		}
	}, [tasks]);

	const onOpenTask = (id: ITaskModel['id'], descr: ITaskModel['description']) => {
		setParentId(id);
		setParentDescription(descr);
	}

	return (
		<Box className="app">
			<TaskList
				taskList={taskList}
				onOpenTask={onOpenTask}></TaskList>
			<SubTaskList
				subtaskList={subTaskList}
				taskParentId={parentId}
				taskParentDescription={parentDescription}></SubTaskList>
		</Box >
	);
};