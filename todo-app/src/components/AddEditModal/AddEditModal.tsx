import React from "react";
import { Box, Button, TextField, Modal, Stack, IconButton, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Edit as EditButton } from '@mui/icons-material';
import { ITaskModel } from "../TaskItem/type";
import { v4 as uuidv4 } from 'uuid';
import { ColorPicker } from '../ColorPicker/ColorPicker'
import "./AddEditModal.css";

const modal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 450,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '20px',
	borderRadius: '10px',
};

interface AddEditModalProps {
	id: ITaskModel['id'];
	parentId: ITaskModel['parentId'];
	description: ITaskModel['description'];
	isCompleted: ITaskModel['isCompleted'];
	onAddTask: (task: ITaskModel) => void;
	onEditTask?: (task: ITaskModel) => void;
}

export const AddEditModal: React.FC<AddEditModalProps> = ({ id, parentId, description, isCompleted, onAddTask, onEditTask }) => {
	const [open, setOpen] = React.useState(false);
	const [newDescription, setNewDescription] = React.useState(description);
	const [newColor, setNewColor] = React.useState('#000000');
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const addTask = () => {
		let descr = document.getElementById('outlined-basic');
		if (descr !== null) {
			setNewDescription(descr.innerHTML);
		}

		let newTask = {
			id: uuidv4(),
			parentId: parentId,
			description: newDescription,
			isCompleted: isCompleted,
			color: newColor
		}
		onAddTask(newTask);
		setOpen(false);
	}

	const editTask = () => {
		let currentTask = {
			id: id,
			parentId: parentId,
			description: newDescription,
			isCompleted: isCompleted,
			color: newColor
		}
		onEditTask?.(currentTask);
		setOpen(false);
	}

	const handleTextFieldChange = (e: { target: { value: string }; }) => {
		setNewDescription(e.target.value);
	}

	const onChangeFontColor = (color: string) => {
		setNewColor(color);
	}

	return (
		<div>{!description.length ?
			<Button variant="contained" startIcon={<AddOutlinedIcon />} color="primary" sx={{ marginBottom: '15px' }} onClick={handleOpen} >Добавить задачу</Button> :
			<IconButton color='primary' aria-label='edit' className="task-item-button" onClick={handleOpen} >
				<EditButton />
			</IconButton>
		}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<Typography variant="h6">{!description.length ? 'Добавление задачи' : 'Редактирование задачи'}</Typography>
					<Stack spacing={2} direction="row" alignItems={'center'} justifyContent={"space-around"}>
						<TextField id="outlined-basic" variant="outlined" inputProps={{ style: { fontSize: 18, width: '400px' } }} defaultValue={!description.length ? "" : description} onChange={handleTextFieldChange} />
						<ColorPicker onChangeFontColor={onChangeFontColor}></ColorPicker>
					</Stack>
					<Stack spacing={2} direction="row" justifyContent={"space-around"}>
						<Button variant="contained" onClick={!description.length ? addTask : editTask}>Сохранить</Button>
						<Button variant="outlined" onClick={handleClose}>Отмена</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}