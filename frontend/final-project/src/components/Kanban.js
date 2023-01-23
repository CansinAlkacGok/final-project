import React, { useState, useContext } from "react";
import MyContext from "../context/MyContext";
import "./Kanban.css";

export default function Kanban() {
  const [task, setTask] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log({ task }); // clg to check
    setTask("");
  };

  const { user } = useContext(MyContext);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Clean",
      task: "Clean the kitchen and ...",
      status: "todo",
    },
    { id: 2, title: "Laundry", status: "in progress" },
    { id: 3, title: "Netflix", status: "in progress" },
    { id: 4, title: "Project x", status: "done" },
  ]);

  // ------ testing below ------

  let doneArray = [];
  let allDone = user.kanban;

  for (const task of allDone) {
    if (task.status === "done") {
      doneArray.push(task);
    }
  }
  console.log(user.kanban);
  console.log(doneArray);
  console.log(doneArray[0].title);

  let test = user.kanban[0].title;

  // console.log(user);// clg to check
  // console.log(user, user.firstName, user.lastName); // clg to check

  // ------ testing above -------

  const handleDrag = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    console.log(task); // clg to check
  };

  const handleDrop = (e, status) => {
    let task = JSON.parse(e.dataTransfer.getData("task"));
    task.status = status;
    setTasks((prevTasks) =>
      prevTasks.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      })
    );
  };

  return (
    <div className="kanban-container">
      {/* <>{test}</> */}

      <form className="kanban-form" onSubmit={handleAddTodo}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <label>Task</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="addTodoBtn">Add Task</button>
      </form>

      <div className="board-container">
        <div
          className="board-column"
          onDrop={(e) => handleDrop(e, "todo")}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>To Do</h3>
          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <div
                key={task.id}
                className="board-task"
                draggable
                onDragStart={(e) => handleDrag(e, task)}
              >
                {task.title}
              </div>
            ))}
        </div>

        <div
          className="board-column"
          onDrop={(e) => handleDrop(e, "in progress")}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>In Progress</h3>
          {tasks
            .filter((task) => task.status === "in progress")
            .map((task) => (
              <div
                key={task.id}
                className="board-task"
                draggable
                onDragStart={(e) => handleDrag(e, task)}
              >
                {task.title}
              </div>
            ))}
        </div>

        <div
          className="board-column"
          onDrop={(e) => handleDrop(e, "done")}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>Done</h3>
          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <div
                key={task.id}
                className="board-task"
                draggable
                onDragStart={(e) => handleDrag(e, task)}
              >
                {task.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
