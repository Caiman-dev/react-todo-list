import React from "react";
import Box from '@mui/material/Box';
import { TaskList, SubTaskList } from './components';
import "./App.css";

const DEFAULT_TASK_LIST = [
  { id: 1, parentId: null, description: 'task 1', isCompleted: false },
  { id: 2, parentId: null, description: 'task 2', isCompleted: false },
  { id: 3, parentId: null, description: 'task 3', isCompleted: false }
];

const App = () => {
  const [taskList, setTaskList] = React.useState(DEFAULT_TASK_LIST);

  React.useEffect(() => {
    setTaskList(DEFAULT_TASK_LIST);
  }, []);

  return (
    <Box className="app">
      <TaskList taskList={taskList}></TaskList>
      <SubTaskList></SubTaskList>
    </Box >
  );
};

export default App