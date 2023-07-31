import React from "react";
import { Box, Typography } from '@mui/material';
import "./TaskList.css";
import { TaskItem } from "../TaskItem/TaskItem";
import { AddModal } from "../AddModal/AddModal";
import { ITaskModel } from "../TaskItem/type";

const typography = {
	fontWeight: 700,
	marginBottom: '20px',
	color: 'white',
};

interface TaskListProps {
	taskList: ITaskModel[] | null;
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ onOpenTask, taskList }) => {
	return (
		<Box className="task-list">
			<Typography variant="h4" sx={typography} >СПИСОК ЗАДАЧ</Typography>
			<AddModal></AddModal>
			<Box>
				{taskList?.length ? taskList.map((_task) => {
					return <TaskItem key={_task.id} task={_task} onOpenTask={onOpenTask}></TaskItem>
				}) : <p>Пусто</p>}
			</Box>
		</Box >
	);
};