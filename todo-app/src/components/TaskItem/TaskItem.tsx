import React from "react";
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { Delete as DeleteButton } from '@mui/icons-material';
import "./TaskItem.css";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "./type";

interface TaskItemProps {
	task: ITaskModel;
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
	onAddTask: (task: ITaskModel) => void;
	onEditTask: (task: ITaskModel) => void;
	onDeleteTask: (id: ITaskModel['id']) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onOpenTask, onAddTask, onDeleteTask, onEditTask }) => {
	const handleDeleteButtonClick = (event: { stopPropagation: () => void; }, id: ITaskModel['id']) => {
		event.stopPropagation();
		onDeleteTask(id);
	};

	//добавить ивент Mouseover и MouseOut к TaskItem
	React.useEffect(() => {
		var element = document.getElementById(task.id);
		element?.addEventListener('mouseover', () => {
			var element = document.getElementById('box' + task.id);
			element?.classList.remove('hidden');
		});
		element?.addEventListener('mouseout', () => {
			var element = document.getElementById('box' + task.id);
			element?.classList.add('hidden');
		});
	}, []);

	return (
		<Paper id={task.id} className="task-item" onClick={() => onOpenTask(task.id, task.description)}>
			<Typography variant='h6' component='h6'>{task.description}</Typography>
			<Box id={'box' + task.id} display='flex' justifyContent='flex-end' className="hidden">
				<AddEditModal id={task.id} parentId={null} description={task.description} isCompleted={task.isCompleted} onAddTask={onAddTask} onEditTask={onEditTask}></AddEditModal>
				<IconButton onClick={(e) => handleDeleteButtonClick(e, task.id)} color='error' aria-label='delete' className="task-item-button">
					<DeleteButton />
				</IconButton>
			</Box>
		</Paper>
	);
};