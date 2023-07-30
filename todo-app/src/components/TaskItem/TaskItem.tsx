import React from "react";
import { Box, Stack, Typography, IconButton, Paper } from '@mui/material';
import { Delete as DeleteButton } from '@mui/icons-material';
import "./TaskItem.css";
import { EditModal } from "../EditModal/EditModal";
import type { ITaskModel } from '../../../index';

interface TaskItemProps {
	task: ITaskModel;
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ onOpenTask, task }) => {

	const handleDeleteButtonClick = (event: { stopPropagation: () => void; }, id: ITaskModel['id']) => {
		event.stopPropagation();
		alert('delete ' + id);
	};

	return (
		<Paper className="task-item" onClick={() => onOpenTask(task.id, task.description)}>
			<Stack direction="row" spacing={2} className="task-item__inner" >
				<Typography variant='h6' component='h6'>{task.description}</Typography>
				<Box display='flex' justifyContent='flex-end'>
					<EditModal description={task.description}></EditModal>
					<IconButton onClick={(e) => handleDeleteButtonClick(e, task.id)} color='error' aria-label='delete' className="task-item-button">
						<DeleteButton />
					</IconButton>
				</Box>
			</Stack>
		</Paper>
	);
};