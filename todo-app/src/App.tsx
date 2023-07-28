import React from "react";
import Box from '@mui/material/Box';
import { TaskList, SubTaskList } from './components';
import "./App.css";

const DEFAULT_TASK_LIST = [
  { id: 1, parentId: null, description: 'Помыть посуду', isCompleted: false },
  { id: 2, parentId: null, description: 'Купить яблоки', isCompleted: false },
  { id: 3, parentId: null, description: 'Поменять фильтры для воды', isCompleted: false },
  { id: 4, parentId: null, description: 'Помыть яблоки', isCompleted: false },
  { id: 5, parentId: null, description: 'Сварить варенье', isCompleted: false },
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