import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import { useState } from "react";

const Tasks = () => {
  const [taskForm,setTaskForm]=useState(false);
  const [currentTask,setCurrentTask]=useState(null);
  return (
    <div>
      <TaskList setTaskForm={setTaskForm} taskForm={taskForm} setCurrentTask={setCurrentTask}/>
      {taskForm&&<TaskForm setTaskForm={setTaskForm} currentTask={currentTask} setCurrentTask={setCurrentTask}/>}
    </div>
  );
};

export default Tasks;
