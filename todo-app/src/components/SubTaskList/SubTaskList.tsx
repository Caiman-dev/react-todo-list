import React from "react";
import { Box, Typography } from '@mui/material';
import "./SubTaskList.css";
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "../TaskItem/type";
import ClipLoader from "react-spinners/ClipLoader";

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
	const [loading, setLoading] = React.useState(false);
	const [color, setColor] = React.useState("#fff");

	//loader
	React.useEffect(() => {
		setColor("#34bcda");
		console.log(taskParentDescription);
		if (taskParentId !== null) {
			setLoading(true);
			setTimeout(() => { setLoading(false); }, 100)
		}
	}, [taskParentId]);

	return (
		<Box className="subtask-list">
			{loading ?
				<ClipLoader
					color={color}
					loading={loading}
					size={70}
					aria-label="Loading Spinner"
					data-testid="loader"
				/> :
				<div>
					<Typography variant="h4" sx={typography} >{taskParentDescription}</Typography>
					{taskParentId && <AddEditModal id={""} parentId={taskParentId} description={""} isCompleted={false} onAddTask={onAddTask}></AddEditModal>}
					<Box>
						{subtaskList?.length ?
							subtaskList.map((_subtask) => {
								return _subtask.parentId === taskParentId ? <SubTaskItem key={_subtask.id} subtask={_subtask} onAddTask={onAddTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask}></SubTaskItem> : null;
							}) : <p>Пусто</p>}
					</Box>
				</div>
			}
		</Box >
	);
};