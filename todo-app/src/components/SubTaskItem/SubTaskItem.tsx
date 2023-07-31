import React from "react";
import { Box, Stack, Typography, IconButton, Paper, Checkbox } from '@mui/material';
import { Delete as DeleteButton } from '@mui/icons-material';
import "./SubTaskItem.css";
import { EditModal } from "../EditModal/EditModal";
import { ITaskModel } from "../TaskItem/type";

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
					<Box className="subtask-item__buttons">
						<EditModal description={subtask.description}></EditModal>
						<IconButton onClick={() => alert('delete' + subtask.id)} color='error' aria-label='delete' className="subtask-item-button">
							<DeleteButton />
						</IconButton>
					</Box>
				</Stack>
			</Box>
		</Paper>
	);
};