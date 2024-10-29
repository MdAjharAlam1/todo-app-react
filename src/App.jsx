import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import TaskContainer from './components/main/TaskContainer'
import './App.css'
import todoIcon from './assets/images/direct-hit.png'
import doingIcon from './assets/images/glowing-star.png'
import doneIcone from './assets/images/check-mark-button.png'

const oldTask = localStorage.getItem("tasks")
console.log(oldTask)
function App() {
  const[tasks,setTasks] = useState(JSON.parse(oldTask) || [])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  function handleDelete(index1){
    const newTask = tasks.filter((item,index) => index !== index1)
    setTasks(newTask)

  }

  return (
    <div className='app'>
      {/* header section */}
      <Header setTask={setTasks}/>

      {/* main section */}
      <main className='app-main'>
        <TaskContainer tasks={tasks} title="To do" status="todo" img={todoIcon} handleDelete={handleDelete}/>
        <TaskContainer tasks={tasks} title="Doing" status="Doing" img={doingIcon} handleDelete={handleDelete}/>
        <TaskContainer tasks={tasks} title="Done" status ="Done" img={doneIcone} handleDelete={handleDelete}/>  
      </main>
    </div>
  )
}

export default App
