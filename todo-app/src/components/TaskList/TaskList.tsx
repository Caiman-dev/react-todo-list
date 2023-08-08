import React from "react";
import { Box, Typography } from '@mui/material';
import { TaskItem } from "../TaskItem/TaskItem";
import { AddEditModal } from "../AddEditModal/AddEditModal";
import { ITaskModel } from "../TaskItem/type";
import { Reorder } from "framer-motion"
import "./TaskList.css";

const typography = {
	fontWeight: 700,
	marginBottom: '20px',
	color: 'white',
};

interface TaskListProps {
	taskList: ITaskModel[];
	onOpenTask: (id: ITaskModel['id'], descr: ITaskModel['description']) => void;
	onAddTask: (task: ITaskModel) => void;
	onEditTask: (task: ITaskModel) => void;
	onDeleteTask: (id: ITaskModel['id']) => void;
	onChangeOrderTaskList: (reorderedList: ITaskModel[]) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ taskList, onOpenTask, onAddTask, onEditTask, onDeleteTask, onChangeOrderTaskList }) => {
	return (
		<Box className="task-list">
			<Typography variant="h4" sx={typography}>СПИСОК ЗАДАЧ</Typography>
			<AddEditModal id={""} parentId={null} description={""} isCompleted={false} onAddTask={onAddTask}></AddEditModal>
			<Box>
				<Reorder.Group as="ul" axis="y" values={taskList} onReorder={onChangeOrderTaskList}>
					{taskList?.length ? taskList.map((_task) => {
						return (<Reorder.Item key={_task.id} value={_task}>
							<TaskItem key={_task.id} task={_task} onOpenTask={onOpenTask} onAddTask={onAddTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask}></TaskItem>
						</Reorder.Item>)
					}) : <p>Пусто</p>}
				</Reorder.Group>
			</Box>
		</Box >
	);
};