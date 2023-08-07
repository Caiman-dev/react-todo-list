import React from "react";
import { Box, Button, Modal, Stack, IconButton } from '@mui/material';
import { ColorLens as ColorButton } from '@mui/icons-material';
import { HexColorPicker } from "react-colorful";
import "./ColorPicker.css";

const modal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
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

interface ColorPickerProps {
	onChangeFontColor: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ onChangeFontColor }) => {
	const [color, setColor] = React.useState('#000000');
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const onHandleChangeColor = () => {
		onChangeFontColor(color);
		setOpen(false);
	}

	return (
		<Box>
			<IconButton color='primary' aria-label='edit' className="task-item-button" onClick={handleOpen} >
				<ColorButton />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={modal}>
					<HexColorPicker color={color} onChange={setColor} />
					<Stack spacing={2} direction="row" justifyContent={"space-around"}>
						<Button variant="contained" onClick={onHandleChangeColor}>ОК</Button>
						<Button variant="outlined" onClick={handleClose}>Отмена</Button>
					</Stack>
				</Box>
			</Modal>
		</Box>
	);
}