import * as React from "react"
import { useState } from "react"
import Draggable from "react-draggable";
import TaskHeader from "../components/TaskHeader"
import Tasks from "../components/Tasks"
import AddTask from "../components/AddTask"
import cafeAnimation from "../images/cafe-animation.mp4"
import Sound from "../components/Sound"
import Timer from "../components/Timer"
import Greeting from "../components/Greeting"

function IndexPage () {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  // Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Importance
  const toggleImportance = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, important: !task.important} : task))
  }

  return (
    <main>
      <Draggable>
        <div className='todo-container'>
          <TaskHeader onAdd={() => setShowAdd(!showAdd)}
            showAddTask={showAdd}>
          </TaskHeader>
          {showAdd && <AddTask onAdd={addTask}/>}
          <Tasks tasks={tasks}
            onDelete= {deleteTask}
            onToggle={toggleImportance}
          />  
        </div>
      </Draggable>
        <div className='centerpiece'>
          <video autoPlay loop muted id='animation'>
          <source src={cafeAnimation} type='video/mp4'/>
        </video>
        </div>
      <Draggable>
        <div className='sounds-container'>
          <header className='header'>
            <h1>Sounds</h1>
          </header>
          <Sound></Sound>
        </div>
      </Draggable>
      <Draggable>
        <div className="timer-container">
          <Timer></Timer>
        </div>
        </Draggable>
        <div className="date-time-container">
          <Greeting></Greeting>
        </div>
    </main>
  )
}

export default IndexPage
