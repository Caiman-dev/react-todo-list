import React from "react";
import { Box, Typography } from '@mui/material';
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "../TaskItem/type";
import ClipLoader from "react-spinners/ClipLoader";
import { Reorder } from "framer-motion"
import "./SubTaskList.css";

const typography = {
	fontWeight: 700,
	marginBottom: '20px',
};

interface TaskListProps {
	subtaskList: ITaskModel[];
	taskParentId: ITaskModel['id'] | null;
	taskParentDescription: ITaskModel['description'] | null;
	onAddTask: (task: ITaskModel) => void;
	onEditTask: (task: ITaskModel) => void;
	onDeleteTask: (id: ITaskModel['id']) => void;
	onChangeOrderSubTaskList: (reorderedList: ITaskModel[]) => void;
}

export const SubTaskList: React.FC<TaskListProps> = ({ subtaskList, taskParentId, taskParentDescription, onAddTask, onEditTask, onDeleteTask, onChangeOrderSubTaskList }) => {
	const [loading, setLoading] = React.useState(false);

	//loader
	React.useEffect(() => {
		if (taskParentId !== null) {
			setLoading(true);
			setTimeout(() => { setLoading(false); }, 400)
		}
	}, [taskParentId]);

	return (
		<Box className="subtask-list">
			{loading ?
				<ClipLoader
					color={'#34bcda'}
					loading={loading}
					size={70}
					aria-label="Loading Spinner"
					data-testid="loader"
				/> :
				<div>
					<Typography variant="h4" sx={typography} >{taskParentDescription}</Typography>
					{taskParentId && <AddEditModal id={""} parentId={taskParentId} description={""} isCompleted={false} onAddTask={onAddTask}></AddEditModal>}
					<Box>
						<Reorder.Group as="ul" axis="y" values={subtaskList} onReorder={onChangeOrderSubTaskList}>
							{subtaskList?.length ?
								subtaskList.map((_subtask) => {
									return (<Reorder.Item key={_subtask.id} value={_subtask}>
										{_subtask.parentId === taskParentId ? <SubTaskItem key={_subtask.id} subtask={_subtask} onAddTask={onAddTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask}></SubTaskItem> : null}
									</Reorder.Item>)
								}) : <p>Пусто</p>}
						</Reorder.Group>
					</Box>
				</div>
			}
		</Box >
	);
};