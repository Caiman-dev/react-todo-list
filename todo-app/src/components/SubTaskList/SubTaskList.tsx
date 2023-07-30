import React from "react";
import { Box, Typography } from '@mui/material';
import "./SubTaskList.css";
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";
import { AddModal } from "../AddModal/AddModal";
import type { ITaskModel } from '../../../index';

const typography = {
	fontWeight: 700,
	marginBottom: '20px',
};

interface TaskListProps {
	subtaskList: ITaskModel[] | null;
	taskParentId: ITaskModel['id'] | null;
	taskParentDescription: ITaskModel['description'] | null;
}

export const SubTaskList: React.FC<TaskListProps> = ({ subtaskList, taskParentId, taskParentDescription }) => {
	return (
		<Box className="subtask-list">
			<Typography variant="h4" sx={typography} >{taskParentDescription}</Typography>
			{taskParentId && <AddModal></AddModal>}
			<Box>
				{subtaskList?.length ?
					subtaskList.map((_subtask) => {
						return _subtask.parentId === taskParentId ? <SubTaskItem key={_subtask.id} subtask={_subtask}></SubTaskItem> : null;
					}) : <p>Пусто</p>}
			</Box>
		</Box >
	);
};