import React from "react";
import { Box, Stack, Typography, IconButton, Paper } from '@mui/material';
import { Delete as DeleteButton, Edit as EditButton } from '@mui/icons-material';
import "./TaskItem.css";
import type { ITaskModel } from '../../../index';

interface TaskItemProps {
	task: ITaskModel;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	return (
		<Paper className="task-item">
			<Stack direction="row" spacing={2} className="task-item__inner" >
				<Typography variant='h6' component='h6'>{task.description}</Typography>
				<Box display='flex' justifyContent='flex-end'>
					<IconButton onClick={() => alert('edit' + task.id)} color='primary' aria-label='edit' className="task-item-button">
						<EditButton />
					</IconButton>
					<IconButton onClick={() => alert('delete' + task.id)} color='error' aria-label='delete' className="task-item-button">
						<DeleteButton />
					</IconButton>
				</Box>
			</Stack>
		</Paper>
	);
};