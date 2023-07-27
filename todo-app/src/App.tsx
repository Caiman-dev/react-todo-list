import React from "react";
import "./App.css";
import { TaskList, SubTaskList } from './components';

const App = () => {
  return (
    <div className="app">
      <TaskList></TaskList>
      <SubTaskList></SubTaskList>
    </div >
  );
};

export default App;
