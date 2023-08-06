import React from "react";
import { Box, Stack, Typography, IconButton, Paper, Checkbox } from '@mui/material';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Delete as DeleteButton } from '@mui/icons-material';
import "./SubTaskItem.css";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "../TaskItem/type";

interface TaskItemProps {
	subtask: ITaskModel;
	onAddTask: (task: ITaskModel) => void;
	onEditTask: (task: ITaskModel) => void;
	onDeleteTask: (id: ITaskModel['id']) => void;
}

// const theme = createTheme({ palette: { mode: 'dark' } });

export const SubTaskItem: React.FC<TaskItemProps> = ({ subtask, onAddTask, onDeleteTask, onEditTask }) => {
	const [checked, setChecked] = React.useState(subtask.isCompleted);

	const handleDeleteButtonClick = (event: { stopPropagation: () => void; }, id: ITaskModel['id']) => {
		event.stopPropagation();
		onDeleteTask(id);
	};

	const handleCheckBoxChanged = (event: { stopPropagation: () => void; }) => {
		event.stopPropagation();
		setChecked(!checked);
		let currentTask = {
			id: subtask.id,
			parentId: subtask.parentId,
			description: subtask.description,
			isCompleted: !checked
		}
		onEditTask?.(currentTask);

		//поменять цвет задачи
		if (!checked === true) {
			var d = document.getElementById(subtask.id);
			d?.classList.add('subtask-item--completed');
		}
		else {
			var d = document.getElementById(subtask.id);
			d?.classList.remove('subtask-item--completed');
		}
	}

	React.useEffect(() => {
		//загрузить подзадачи с нужным цветом
		if (subtask.isCompleted === true) {
			var d = document.getElementById(subtask.id);
			d?.classList.add('subtask-item--completed');
		}
		else {
			var d = document.getElementById(subtask.id);
			d?.classList.remove('subtask-item--completed');
		}

		//добавить ивент Mouseover и MouseOut к SubtaskItem
		var element = document.getElementById(subtask.id);
		element?.addEventListener('mouseover', () => {
			var element = document.getElementById('box' + subtask.id);
			element?.classList.remove('hidden');
		});
		element?.addEventListener('mouseout', () => {
			var element = document.getElementById('box' + subtask.id);
			element?.classList.add('hidden');
		});
	}, []);

	return (
		<Paper id={subtask.id} className="subtask-item">
			<Box className="subtask-item__inner">
				<Stack direction="row" spacing={2} className="subtask-item__content" >
					<Checkbox checked={checked} onChange={(e) => handleCheckBoxChanged(e)} />
					<Typography variant='h6' component='h6'>{subtask.description}</Typography>
				</Stack>
				<Stack direction="row" spacing={2} className="subtask-item__content" >
					<Box id={'box' + subtask.id} className="subtask-item__buttons hidden">
						<AddEditModal id={subtask.id} parentId={subtask.parentId} description={subtask.description} isCompleted={checked} onAddTask={onAddTask} onEditTask={onEditTask}></AddEditModal>
						<IconButton onClick={(e) => handleDeleteButtonClick(e, subtask.id)} color='error' aria-label='delete' className="subtask-item-button">
							<DeleteButton />
						</IconButton>
					</Box>
				</Stack>
			</Box>
		</Paper>
	);
};