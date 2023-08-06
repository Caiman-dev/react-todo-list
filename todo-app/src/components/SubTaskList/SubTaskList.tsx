import React from "react";
import { Box, Typography } from '@mui/material';
import "./SubTaskList.css";
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "../TaskItem/type";

const typography = {
	fontWeight: 700,
	marginBottom: '20px',
};

interface TaskListProps {
	subtaskList: ITaskModel[] | null;
	taskParentId: ITaskModel['id'] | null;
	taskParentDescription: ITaskModel['description'] | null;
	onAddTask: (task: ITaskModel) => void;
	onEditTask: (task: ITaskModel) => void;
	onDeleteTask: (id: ITaskModel['id']) => void;
}

export const SubTaskList: React.FC<TaskListProps> = ({ subtaskList, taskParentId, taskParentDescription, onAddTask, onEditTask, onDeleteTask }) => {
	return (
		<Box className="subtask-list">
			<Typography variant="h4" sx={typography} >{taskParentDescription}</Typography>
			{taskParentId && <AddEditModal id={""} parentId={taskParentId} description={""} isCompleted={false} onAddTask={onAddTask}></AddEditModal>}
			<Box>
				{subtaskList?.length ?
					subtaskList.map((_subtask) => {
						return _subtask.parentId === taskParentId ? <SubTaskItem key={_subtask.id} subtask={_subtask} onAddTask={onAddTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask}></SubTaskItem> : null;
					}) : <p>Пусто</p>}
			</Box>
		</Box >
	);
};