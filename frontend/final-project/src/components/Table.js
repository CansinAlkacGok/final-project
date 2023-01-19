import React, { useState } from 'react';
import "./Table.css"

function Table() {

    const [task, setTask] = useState("");

    const handleAddTodo = (e) => {
      e.preventDefault();
      console.log({ task });
      setTask("");
    }

  const [rows, setRows] = useState([
    { toDo: 'Task 1', working: 'Task 2', done: 'Task 3' },
  ]);

  const addRow = (e) => {
    setRows([...rows, { toDo: '', working: '', done: '' }]);
    e.preventDefault();
    console.log({ task });
    setTask("");
  };

  return (
    <div className="table-container"> 
        <form onSubmit={addRow}>
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
      </form>
      <table>
        <thead>
          <tr>
            <th>To-Do</th>
            <th>Working</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.toDo}</td>
              <td>{row.working}</td>
              <td>{row.done}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;