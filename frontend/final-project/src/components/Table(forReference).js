// import React, { useState, useContext } from 'react';
// import MyContext from "../context/MyContext";
// import "./Table.css"

// function Table() {

//   	const {user, setUser} = useContext(MyContext);
//     const [task, setTask] = useState("");

//   console.log(user.kanban)

//     const handleAddTodo = (e) => {
//       e.preventDefault();
//       console.log({ task });
//       setTask("");
//     }

//   const [rows, setRows] = useState([
//     { toDo: [], working: [], done: [] },
//   ]);


//   const addRow = (e) => {
//     setRows([...rows, { toDo: '', working: '', done: '' }]);
//     e.preventDefault();
//     console.log({ task });
//     setTask("");
//   };

//   return (
//     <div className="table-container"> 
//         <form onSubmit={addRow}>
//         <label htmlFor="task">Task:</label>
//         <input
//           type="text"
//           name="task"
//           id="task"
//           value={task}
//           required
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button>Add to Board</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>To-Do</th>
//             <th>Working</th>
//             <th>Done</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td>{row.toDo}</td>
//               <td>{row.working}</td>
//               <td>{row.done}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

import React, { useState } from 'react';
import "./Table.css"

function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'in progress' },
    { id: 3, title: 'Task 3', status: 'done' },
  ]);

  const handleDrag = (e, task) => {
    e.dataTransfer.setData("task", JSON.stringify(task));
  }

  const handleDrop = (e, status) => {
    let task = JSON.parse(e.dataTransfer.getData("task"));
    task.status = status;
    setTasks(prevTasks => prevTasks.map(item => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    }));
  }

  return (
    <div className="board-container">
      <div className="board-column" onDrop={(e) => handleDrop(e, "todo")} onDragOver={(e) => e.preventDefault()}>
        <h3>To Do</h3>
        {tasks.filter(task => task.status === "todo").map(task => (
          <div key={task.id} className="board-task" draggable onDragStart={(e) => handleDrag(e, task)}>
            {task.title}
          </div>
        ))}
      </div>
      <div className="board-column" onDrop={(e) => handleDrop(e, "in progress")} onDragOver={(e) => e.preventDefault()}>
        <h3>In Progress</h3>
        {tasks.filter(task => task.status === "in progress").map(task => (
          <div key={task.id} className="board-task" draggable onDragStart={(e) => handleDrag(e, task)}>
            {task.title}
          </div>
        ))}
      </div>
      <div className="board-column" onDrop={(e) => handleDrop(e, "done")} onDragOver={(e) => e.preventDefault()}>
        <h3>Done</h3>
        {tasks.filter(task => task.status === "done").map(task => (
          <div key={task.id} className="board-task" draggable onDragStart={(e) => handleDrag(e, task)}>
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
