import React from "react";
import Box from '@mui/material/Box';
import { TaskList } from "../TaskList";
import { SubTaskList } from "../SubTaskList";
import { ITaskModel } from "../TaskItem/type";
import { getTasksFromServer, addTaskToServer, deleteTaskFromServer, updateTaskOnServer } from "../../api/tasks";
import "./Todo.css";

export const Todo = () => {
	const [tasks, setTasks] = React.useState<ITaskModel[] | null>();
	const [taskList, setTaskList] = React.useState<ITaskModel[] | null>(null);
	const [subTaskList, setSubTaskList] = React.useState<ITaskModel[] | null>(null);
	const [parentId, setParentId] = React.useState<ITaskModel['id'] | null>(null);
	const [parentDescription, setParentDescription] = React.useState<ITaskModel['description'] | null>(null);

	const getTasks = async () => {
		let result = await getTasksFromServer();
		setTasks(result);
	}

	React.useEffect(() => {
		getTasks();
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

	const onAddTask = (task: ITaskModel) => {
		addTaskToServer(task);
		if (tasks) {
			setTasks([...tasks, task]);
		}
	}

	const onEditTask = (task: ITaskModel) => {
		updateTaskOnServer(task);
		setTasks(tasks?.map((item) => {
			return item.id === task.id ? { ...task } : item;
		}));
	}

	const onDeleteTask = (id: ITaskModel['id']) => {
		deleteTaskFromServer(id);

		//если удаляемая задача - основная, то удалить все подзадачи
		const parent = tasks?.filter((task) => task.id == id);
		if (parent?.[0].parentId === null) {
			const subtasksToDelete = tasks?.filter((task) => task.parentId == id)
			subtasksToDelete?.map((task) => deleteTaskFromServer(task.id));
			setParentId(null);
			setParentDescription(null);
		}
		const newTasks = tasks?.filter((task) => task.id !== id && task.parentId !== id);
		setTasks(newTasks);
	};

	return (
		<Box className="app">
			<TaskList
				taskList={taskList}
				onOpenTask={onOpenTask}
				onAddTask={onAddTask}
				onEditTask={onEditTask}
				onDeleteTask={onDeleteTask}></TaskList>
			<SubTaskList
				subtaskList={subTaskList}
				taskParentId={parentId}
				taskParentDescription={parentDescription}
				onAddTask={onAddTask}
				onEditTask={onEditTask}
				onDeleteTask={onDeleteTask}></SubTaskList>
		</Box >
	);
};