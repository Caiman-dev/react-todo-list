import React from "react";
import { Box, Typography } from '@mui/material';
import "./TaskList.css";
import type { ITaskModel } from '../../../index';
import { TaskItem } from "../TaskItem/TaskItem";

interface TaskListProps {
	taskList: ITaskModel[] | null;
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ onOpenTask, taskList }) => {
	return (
		<Box className="task-list">
			<Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '20px', color: 'white' }} >СПИСОК ЗАДАЧ</Typography>
			<Box>
				{taskList?.length ? taskList.map((_task) => {
					return <TaskItem key={_task.id} task={_task} onOpenTask={onOpenTask}></TaskItem>
				}) : <p>Пусто</p>}
			</Box>
		</Box >
	);
};