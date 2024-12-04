import { useState, useEffect } from "react";
import style from "./Task.module.css";
import { useDispatch } from "react-redux";
import { add, edit } from "../../redux/reducers/taskReducer";

const TaskForm = ({ setTaskForm, currentTask, setCurrentTask }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask); // Pre-fill form with current task
    } else {
      setTask({ title: "", description: "", dueDate: "" });
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === "" || task.dueDate === "") return;

    if (currentTask) {
      dispatch(edit({ id: currentTask.id, updatedTask: task }));
    } else {
      dispatch(add({ ...task, status: "pending" }));
    }

    handleClose();
  };

  const handleClose = () => {
    setTaskForm(false);
    setCurrentTask(null); // Reset current task
  };

  return (
    <>
      <div className={style.taskFormOverlay} onClick={handleClose}></div>
      <form
        className={style.taskFormContainer}
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            placeholder="Task Title"
            required
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Write a small description"
            value={task.description}
            onChange={(e) =>
              setTask({ ...task, description: e.target.value })
            }
          ></textarea>
        </div>
        <div>
          <input
            type="date"
            name="due"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            required
          />
        </div>
        <button type="submit" className={`${style.btn} ${style.addBtn}`}>
          {currentTask ? "UPDATE" : "ADD"}
        </button>
        <button
          type="button"
          className={`${style.btn} ${style.closeBtn}`}
          onClick={handleClose}
        >
          CLOSE
        </button>
      </form>
    </>
  );
};

export default TaskForm;
