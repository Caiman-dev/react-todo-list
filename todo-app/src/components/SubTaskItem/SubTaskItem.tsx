import React from "react";
import { Box, Stack, Typography, IconButton, Paper, Checkbox } from '@mui/material';
import { Delete as DeleteButton, Edit as EditButton } from '@mui/icons-material';
import "./SubTaskItem.css";
import type { ITaskModel } from '../../../index';

interface TaskItemProps {
	subtask: ITaskModel;
}


export const SubTaskItem: React.FC<TaskItemProps> = ({ subtask }) => {
	return (
		<Paper className="subtask-item">
			<Box className="subtask-item__inner">
				<Stack direction="row" spacing={2} className="subtask-item__content" >
					<Checkbox />
					<Typography variant='h6' component='h6'>{subtask.description}</Typography>
				</Stack>
				<Stack direction="row" spacing={2} className="subtask-item__content" >
					<Box>
						<IconButton onClick={() => alert('edit' + subtask.id)} color='primary' aria-label='edit' className="subtask-item-button">
							<EditButton />
						</IconButton>
						<IconButton onClick={() => alert('delete' + subtask.id)} color='error' aria-label='delete' className="subtask-item-button">
							<DeleteButton />
						</IconButton>
					</Box>
				</Stack>
			</Box>
		</Paper>
	);
};