import React from "react";
import { Box, Typography } from '@mui/material';
import "./SubTaskList.css";
import type { ITaskModel } from '../../../index';
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";

interface TaskListProps {
	taskParentId: ITaskModel['id'] | null;
	taskParentDescription: ITaskModel['description'] | null;
	subtaskList: ITaskModel[] | null;
}

export const SubTaskList: React.FC<TaskListProps> = ({ taskParentId, taskParentDescription, subtaskList }) => {
	return (
		<Box className="subtask-list">
			<Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '20px' }} >{taskParentDescription}</Typography>
			<Box>
				{subtaskList?.length ?
					subtaskList.map((_subtask) => {
						return _subtask.parentId === taskParentId ? <SubTaskItem key={_subtask.id} subtask={_subtask}></SubTaskItem> : null;
					}) : <p>Пусто</p>}
			</Box>
		</Box >
	);
};