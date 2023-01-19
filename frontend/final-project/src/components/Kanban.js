import React, { useState } from "react";
import Table from "./Table.js"

export default function Kanban() {

  const [task, setTask] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log({ task });
    setTask("");
  };

  

  return (
    <div>
      <h1>kanban</h1>
    <Table></Table>

     
 
      {/* <form onSubmit={handleAddTodo}>
        <label htmlFor="task">Task:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addTodoBtn">Add to Board</button>
      </form> */}

      <div id="table"></div>

    </div>
    
  );
}
