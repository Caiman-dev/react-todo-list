import React from "react";
import { Box, Button, TextField, Modal, Stack, IconButton, Typography } from '@mui/material';
import { Edit as EditButton } from '@mui/icons-material';
import "./EditModal.css";
import { ITaskModel } from "../../..";
// import type { ITaskModel } from '../../../index';

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

interface EditModalProps {
	description: ITaskModel['description'];
}

export const EditModal: React.FC<EditModalProps> = ({ description }) => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);

	const handleEditButtonClick = () => {
		setOpen(true);
	};

	return (
		<div>
			<IconButton color='primary' aria-label='edit' className="task-item-button" onClick={() => handleEditButtonClick()} >
				<EditButton />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<Typography variant="h6">Редактирование задачи</Typography>
					<TextField id="outlined-basic" variant="outlined" inputProps={{ style: { fontSize: 18, width: '450px' } }} defaultValue={description} />
					<Stack spacing={2} direction="row" justifyContent={"space-around"}>
						<Button variant="contained" onClick={handleClose}>Сохранить</Button>
						<Button variant="outlined" onClick={handleClose}>Отмена</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}