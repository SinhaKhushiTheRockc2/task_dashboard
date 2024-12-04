import { useDispatch, useSelector } from "react-redux";
import { searchIcon } from "../../assets";
import style from "./Task.module.css";
import styled from "styled-components";
import { taskSelector } from "../../redux/reducers/taskReducer";
import { remove, toggle } from "../../redux/reducers/taskReducer";
import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

const TaskList = ({ setTaskForm, taskForm, setCurrentTask }) => {
  const tasks = useSelector(taskSelector);
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().split("T")[0];

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [taskToDelete, setTaskToDelete] = useState(null); // Task to delete

  const handleUpdate = (task) => {
    setTaskForm(true);
    setCurrentTask(task);
  };

  const handleDelete = (taskId) => {
    setShowModal(true); // Show the modal when the delete button is clicked
    setTaskToDelete(taskId); // Store the task to delete
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      dispatch(remove(taskToDelete)); // Delete the task
      setTaskToDelete(null); // Reset the task to delete
      setShowModal(false); // Close the modal
    }
  };

  const cancelDelete = () => {
    setTaskToDelete(null); // Reset the task to delete
    setShowModal(false); // Close the modal
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((task) => {
      if (filter === "all") return true;
      if (filter === "pending") return task.status === "Pending";
      if (filter === "completed") return task.status === "Completed";
      if (filter === "overdue") return task.dueDate < currentDate;
      return true;
    });

  return (
    <>
      <div className={style.searchBarContainer}>
        <input
          type="text"
          placeholder="Search task"
          className={style.search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img src={searchIcon} alt="search-icon" />
      </div>
      <hr />
      <div className={style.filterContainer}>
        <h3>Filter By:</h3>
        <div>
          <label htmlFor="all">All</label>
          <input
            type="radio"
            name="tasks"
            id="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
        </div>
        <div>
          <label htmlFor="pending">Pending</label>
          <input
            type="radio"
            name="tasks"
            id="pending"
            checked={filter === "pending"}
            onChange={() => setFilter("pending")}
          />
        </div>
        <div>
          <label htmlFor="completed">Completed</label>
          <input
            type="radio"
            name="tasks"
            id="completed"
            checked={filter === "completed"}
            onChange={() => setFilter("completed")}
          />
        </div>
        <div>
          <label htmlFor="overdue">Overdue</label>
          <input
            type="radio"
            name="tasks"
            id="overdue"
            checked={filter === "overdue"}
            onChange={() => setFilter("overdue")}
          />
        </div>
      </div>
      <hr />
      <ADDBTN
        onClick={() => setTaskForm(true)}
        disabled={taskForm ? true : false}
      >
        ADD
      </ADDBTN>
      <div className={style.taskListContainer}>
        <table>
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Task Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Toggle Task</th>
              <th>Delete Task</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td
                  style={
                    task.status === "Pending" && task.dueDate < currentDate
                      ? { color: "red" }
                      : {}
                  }
                >
                  {task.dueDate}
                </td>
                <td
                  style={
                    task.status === "Pending"
                      ? { backgroundColor: "red", color: "white" }
                      : { backgroundColor: "green", color: "white" }
                  }
                >
                  {task.status}
                </td>
                <td>
                  <button
                    onClick={() => dispatch(toggle(task.id))}
                    style={{ backgroundColor: "orange", color: "white" }}
                  >
                    Toggle Status
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(task.id)} // Show confirmation modal
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Delete Task
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(task)}
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for task deletion confirmation */}
      <Modal
        show={showModal}
        onClose={cancelDelete} // Cancel delete
        onConfirm={confirmDelete} // Confirm delete
      />
    </>
  );
};

const ADDBTN = styled.button`
  background-color: #007bff;
  width: 15%;
  padding: 1%;
  font-weight: bold;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 8rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #0056b3;
    box-shadow: 2px 2px 2px black;
    transform: scale(0.9);
  }
  &:disabled {
    transform: scale(0.9);
    background-color: #0056b3;
    box-shadow: none;
  }
`;

export default TaskList;
