import React, { useState, useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import "./Kanban.css";

export default function Kanban() {

  const { user } = useContext(MyContext)

  // const [task, setTask] = useState("");
  
  // const handleAddTodo = (e) => {
  //   e.preventDefault();
  //   console.log({ task }); // clg to check
  //   setTask("");
  // };

  
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
  let allDone = user.kanban;
  // const [do, setDos] = useState("")


  let doneArray = [];
  for (const task of allDone) {
    if (task.status === "done") {
      doneArray.push(task);
    }
  }

  let doingArray = [];
  for (const task of allDone) {
    if (task.status === "doing") {
      doingArray.push(task);
    }
  }

  let doArray = [];
  for (const task of allDone) {
    if (task.status === "do") {
      doArray.push(task);
    }
  }

  // console.log(user.kanban);
  console.log(doneArray);
  // console.log(doneArray[0].title);

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

      {/* <form className="kanban-form" onSubmit={handleAddTodo}>
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
      </form> */}

      <div className="board-container">
        <div
          className="board-column"
          onDrop={(e) => handleDrop(e, "do")}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>To Do</h3>
          {doArray
            .filter((task) => task.status === "do")
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
          onDrop={(e) => handleDrop(e, "doing")}
          onDragOver={(e) => e.preventDefault()}
        >
          <h3>In Progress</h3>
          {doingArray
            .filter((task) => task.status === "doing")
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
          {doneArray
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






