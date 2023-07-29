import React from "react";
import { Box, Stack, Typography, IconButton, Paper } from '@mui/material';
import { Delete as DeleteButton, Edit as EditButton } from '@mui/icons-material';
import "./TaskItem.css";
import type { ITaskModel } from '../../../index';

interface TaskItemProps {
	task: ITaskModel;
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
}

const handleEditButtonClick = (event: { stopPropagation: () => void; }, id: ITaskModel['id']) => {
	event.stopPropagation();
	alert('edit ' + id);
};

const handleDeleteButtonClick = (event: { stopPropagation: () => void; }, id: ITaskModel['id']) => {
	event.stopPropagation();
	alert('delete ' + id);
};

export const TaskItem: React.FC<TaskItemProps> = ({ onOpenTask, task }) => {
	return (
		<Paper className="task-item" onClick={() => onOpenTask(task.id, task.description)}>
			<Stack direction="row" spacing={2} className="task-item__inner" >
				<Typography variant='h6' component='h6'>{task.description}</Typography>
				<Box display='flex' justifyContent='flex-end'>
					<IconButton onClick={(e) => handleEditButtonClick(e, task.id)} color='primary' aria-label='edit' className="task-item-button">
						<EditButton />
					</IconButton>
					<IconButton onClick={(e) => handleDeleteButtonClick(e, task.id)} color='error' aria-label='delete' className="task-item-button">
						<DeleteButton />
					</IconButton>
				</Box>
			</Stack>
		</Paper>
	);
};