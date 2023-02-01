import React, { useState, useContext, useEffect } from "react";
import MyContext from "../context/MyContext";

import "./Kanban.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;

export default function Kanban() {
  const { user, setUser } = useContext(MyContext);
  const [doArray, setDoArray] = useState([]);
  const [doingArray, setDoingArray] = useState([]);
  const [doneArray, setDoneArray] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState({});

  const handleEdit = (task) => {
    setEditTask(task);
    setShowModal(true);
  };

  const handleSave = async () => {
    console.log(editTask);
    try {
      const response = await fetch(`/kanban/${editTask._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(editTask),
      });
      const data = await response.json();

      setShowModal(false);
      setUser((prevState) => {
        const updatedKanban = prevState.kanban.map((task) => {
          if (task._id === data._id) {
            return data;
          }
          return task;
        });
        return { ...prevState, kanban: updatedKanban };
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const filteredTasks = user.kanban.reduce(
      (acc, task) => {
        if (task.status === "do") {
          acc[0].push(task);
        } else if (task.status === "doing") {
          acc[1].push(task);
        } else if (task.status === "done") {
          acc[2].push(task);
        }
        return acc;
      },
      [[], [], []]
    );

    setDoArray(filteredTasks[0]);
    setDoingArray(filteredTasks[1]);
    setDoneArray(filteredTasks[2]);
  }, [user]);

  const handleDelete = (taskId) => {
    console.log(taskId);

    fetch(`/kanban/${taskId}`, {
      method: "DELETE",
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((prevState) => {
          const updatedKanban = prevState.kanban.filter(
            (task) => task._id !== taskId
          );
          return { ...prevState, kanban: updatedKanban };
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDrag = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    console.log(task);
  };

  const handleDrop = (e, status) => {
    let task = JSON.parse(e.dataTransfer.getData("task"));
    task.status = status;
    console.log(task);
    // console.log(doArray)
    // console.log(doingArray)
    // console.log(doneArray)

    fetch(`/kanban/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((prevState) => {
          const updatedKanban = prevState.kanban.map((item) => {
            if (item._id === task._id) {
              return { ...item, status: status };
            }
            return item;
          });
          return { ...prevState, kanban: updatedKanban };
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="kanban-container">
        {showModal && (
          <>
            <h2>Edit Task</h2>
            <label>Title</label>
            <input
              type="text"
              value={editTask.title}
              onChange={(e) =>
                setEditTask({ ...editTask, title: e.target.value })
              }
            />

            <button onClick={handleSave}>Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </>
        )}

        {/* <>{test}</> */}

        <div className="board-container">
          <div
            className="board-column"
            onDrop={(e) => handleDrop(e, "do")}
            onDragOver={(e) => e.preventDefault()}
          >
            <h2>To Do</h2>
            {doArray
              .filter((task) => task.status === "do")
              .map((task) => (
                <div
                  key={task._id}
                  className="board-task"
                  draggable
                  onDragStart={(e) => handleDrag(e, task)}
                >
                  {" "}
                  <h3>{task.title}</h3>
                  <p>{task.task}</p>
                  <p>{task.date}</p>
                  <div className="taskIcons">
                    <button onClick={() => handleEdit(task)}>{editIcon}</button>
                    <button onClick={() => handleDelete(task._id)}>
                      {deleteIcon}
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="board-column"
            onDrop={(e) => handleDrop(e, "doing")}
            onDragOver={(e) => e.preventDefault()}
          >
            <h2>In Progress</h2>
            {doingArray
              .filter((task) => task.status === "doing")
              .map((task) => (
                <div
                  key={task._id}
                  className="board-task"
                  draggable
                  onDragStart={(e) => handleDrag(e, task)}
                >
                  <h3>{task.title}</h3>
                  <p>{task.task}</p>
                  <div className="taskIcons">
                    <button>{editIcon}</button>
                    <button onClick={() => handleDelete(task._id)}>
                      {deleteIcon}
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="board-column"
            onDrop={(e) => handleDrop(e, "done")}
            onDragOver={(e) => e.preventDefault()}
          >
            <h2>Done</h2>
            {doneArray
              .filter((task) => task.status === "done")
              .map((task) => (
                <div
                  key={task._id}
                  className="board-task"
                  draggable
                  onDragStart={(e) => handleDrag(e, task)}
                >
                  <h3>{task.title}</h3>
                  <p>{task.task}</p>
                  <div className="taskIcons">
                    <button>{editIcon}</button>
                    <button onClick={() => handleDelete(task._id)}>
                      {deleteIcon}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
