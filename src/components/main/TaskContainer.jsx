import React from 'react'
import './TaskContainer.css'
import deleteIcon from '../../assets/images/delete.png'
import TaskCard from './TaskCard'

function TaskContainer({title,img,tasks,status,handleDelete}) {
  return (
   <div className='main-task-container'>
        <h2 className='task-heading'><img src={img} alt="icon" />{title}</h2>
        {
          tasks.map((task,index)=> task.status === status &&
            <TaskCard key={index} img={deleteIcon} title={task.task} tag={task.tags} handleDelete1={handleDelete} index={index} />
          )
        }
        
   </div>
  )
}

export default TaskContainer
