import React, { useState, useContext } from 'react'
import MyContext from '../context/MyContext.js'
import toast, { Toaster } from 'react-hot-toast'
import SingleToDo from './SingleToDo.js';

export default function TodoList() {

  const [form, setForm] = useState(false);
  const { user, setUser } = useContext(MyContext)

  const addTaskButton = () => {
    setForm(!form)
  }

  const createTask = (e) => {

    e.preventDefault();

    fetch("/tasks", {
      method: "POST",
      body: JSON.stringify({ task: e.target.task.value, date: e.target.date.value === '' ? Date.now() : e.target.date.value, kanban: e.target.kanban.checked }),
      headers: { "Content-Type": "application/json", token: localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(result => {

        if (result.success) {
          toast.success("Task is successfully added.")
          setUser(result.data)
        } else {
          toast.error(JSON.stringify(result.message))
        }

      })

    setForm(!form)
  }

  return (
    <div>
      <h1>To Do's</h1>
      <button onClick={addTaskButton}>+ Add Task</button>
      <div>
        {form && (

          <form onSubmit={createTask}>
            <label>Task: </label>
            <input type="text" name="task" required></input><br></br>
            <label>Due Date: </label>
            <input type="date" name="date"></input><br></br>
            <input type="checkbox" name="calender"></input>
            <label> Add to Calender</label><br></br>
            <input type="checkbox" name="kanban"></input>
            <label> Add to Kanban Board</label>
            <button>Submit</button>
          </form>

        )}
      </div>
      <div>
        {
          user && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h5>Tasks</h5>
                <ul>
                  {user.tasks.map((task) => {
                    console.log(task)
                    const date = [(task.date).split('').splice(0, 4), "/", (task.date).split('').splice(5, 2), "/", (task.date).split('').splice(8, 2)]
                    //console.log(date)
                    if (!task.completed) {
                      return (
                        <SingleToDo task={task} date={date} />
                      )
                    }

                  })}
                </ul>
              </div>
              <div>
                <h5>Done</h5>
                <ul>
                  {user.tasks.map((task) => {
                    console.log(task)
                    const date = [(task.date).split('').splice(0, 4), "/", (task.date).split('').splice(5, 2), "/", (task.date).split('').splice(8, 2)]
                    //console.log(date)
                    if (task.completed) {
                      return (
                        <div>
                          <li key={task._id}>{task.task}</li>
                          <span>{date.reverse()}</span>
                        </div>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>
          )
        }
      </div>

      <Toaster position="top-center" />

    </div>
  )
}
