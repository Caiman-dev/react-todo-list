import React from "react";
import { Box, Typography } from '@mui/material';
import "./TaskList.css";
import type { ITaskModel } from '../../../index';

interface TaskListProps {
	taskList: ITaskModel[];
}

export const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
	return (
		<Box className="task-list">
			<Typography variant="h5" sx={{ fontWeight: 700 }}>СПИСОК ЗАДАЧ</Typography>
			<Box>
				{taskList.map((_task) => { return <p>{_task.description}</p> })}
			</Box>
		</Box>
	);
};