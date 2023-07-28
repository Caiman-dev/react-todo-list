import React from "react";
import { Box, Typography } from '@mui/material';
import "./SubTaskList.css";

export const SubTaskList = () => {
	return (
		<Box className="subtask-list">
			<Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '20px' }} >SubTask name</Typography>
			<p>
				SubTask1
			</p>
			<p>
				SubTask2
			</p>
			<p>
				SubTask3
			</p>
		</Box>
	);
};