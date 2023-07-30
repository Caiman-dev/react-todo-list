import React from "react";
import { Box, Button, TextField, Modal, Stack, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./AddModal.css";

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

export const AddModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button variant="contained" startIcon={<AddOutlinedIcon />} color="primary" sx={{ marginBottom: '15px' }} onClick={handleOpen} >Добавить задачу</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<Typography variant="h6">Добавление задачи</Typography>
					<TextField id="outlined-basic" label='Добавить задачу' variant="outlined" inputProps={{ style: { fontSize: 18, width: '450px' } }} />
					<Stack spacing={2} direction="row" justifyContent={"space-around"}>
						<Button variant="contained" onClick={handleClose}>Сохранить</Button>
						<Button variant="outlined" onClick={handleClose}>Отмена</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}