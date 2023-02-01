import React, { useState, useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import "./Kanban.css";

export default function Kanban() {
  const { user } = useContext(MyContext);

  // const [task, setTask] = useState("");

  // const handleAddTodo = (e) => {
  //   e.preventDefault();
  //   console.log({ task }); // clg to check
  //   setTask("");
  // };

  // let [state, setState] = useState();

// Put below arrays in state?
  let doneArray = [];
  for (const task of user.kanban) {
    if (task.status === "done") {
      doneArray.push(task);
    }
  }

  let doingArray = [];
  for (const task of user.kanban) {
    if (task.status === "doing") {
      doingArray.push(task);
    }
  }

  let doArray = [];
  for (const task of user.kanban) {
    if (task.status === "do") {
      doArray.push(task);
    }
  }

  // state = {
  //   doArray: [...doArray],
  //   doingArray: [...doingArray],
  //   doneArray: [...doneArray]
  // };

  // console.log(user.kanban);
  // console.log(doneArray);
  // console.log(doneArray[0].title);
  // console.log(user);// clg to check
  // console.log(user, user.firstName, user.lastName); // clg to check



  const handleDrag = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
    console.log(task);
  };

  // const handleDrop = (e, status) => {
  //   let task = JSON.parse(e.dataTransfer.getData("task"));
  //   task.status = status;

  const handleDrop = (e, status) => {
    let task = JSON.parse(e.dataTransfer.getData("task"));
    task.status = status;
  // fetch("<your_api_endpoint>/updateTask", {
    fetch(`/home/kanban/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: status
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  
    console.log(task);
  };
    
    // update mongoDB


    // console.log(task)
    // console.log(status)



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
                <h3>{task.title}</h3>
                <p>{task.task}</p>
                <p>{task.date}</p>
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
  