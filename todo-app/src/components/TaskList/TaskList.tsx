import React from "react";
import { Box, Typography } from '@mui/material';
import "./TaskList.css";
import { TaskItem } from "../TaskItem/TaskItem";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "../TaskItem/type";

const typography = {
	fontWeight: 700,
	marginBottom: '20px',
	color: 'white',
};

interface TaskListProps {
	taskList: ITaskModel[] | null;
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
	onAddTask: (task: ITaskModel) => void;
	onEditTask: (task: ITaskModel) => void;
	onDeleteTask: (id: ITaskModel['id']) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ taskList, onOpenTask, onAddTask, onEditTask, onDeleteTask }) => {
	return (
		<Box className="task-list">
			<Typography variant="h4" sx={typography} >СПИСОК ЗАДАЧ</Typography>
			<AddEditModal id={""} parentId={null} description={""} isCompleted={false} onAddTask={onAddTask}></AddEditModal>
			<Box>
				{taskList?.length ? taskList.map((_task) => {
					return <TaskItem key={_task.id} task={_task} onOpenTask={onOpenTask} onAddTask={onAddTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask}></TaskItem>
				}) : <p>Пусто</p>}
			</Box>
		</Box >
	);
};