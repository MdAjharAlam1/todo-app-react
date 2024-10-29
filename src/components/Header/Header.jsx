import React, { useState } from 'react'
import './Header.css'
import Tag from './Tag'

function Header({setTask}) {
  const[taskData,setTaskData] = useState({
    task:"",
    status:'todo',
    tags:[]
  })


  function handleChange(e){
    const{name,value} = e.target
    // console.log(name,value)
    setTaskData((prev)=>{
      return{...prev,[name]:value}
    })
  }

  function handleCheckedtag(tag){
    return taskData.tags.some((item)=> item === tag)
  }



  function handleSelectTag(tag){
    // console.log(tag)
    if(taskData.tags.some((item) => item === tag)){
      const newFilterData = taskData.tags.filter((item)=> item !== tag)
      setTaskData((prev)=>({...prev,tags:newFilterData}));
    }
    else{
      setTaskData((prev)=>({...prev,tags:[...taskData.tags,tag]}))
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    // console.log(taskData)
    setTask((prev)=>{
      return [...prev,taskData]
    })
    setTaskData({
      task:"",
      status:"",
      tags:[]
    })
  }




  return (
    <div className='app-header'>
      <form className='header-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Your Task' name='task' onChange={handleChange} value={taskData.task} required />
            <div className='header-bottom-section'>
                <div className='header-tag'>
                    <Tag type="button" onSelect={handleSelectTag} selected ={handleCheckedtag("HTML")} tagName="HTML" className="tag-btn"/>
                    <Tag type="button" onSelect={handleSelectTag} selected= {handleCheckedtag("CSS")} tagName="CSS" className="tag-btn"/>
                    <Tag type="button" onSelect={handleSelectTag} selected= {handleCheckedtag("JavaScript")} tagName="JavaScript" className="tag-btn"/>
                    <Tag type="button" onSelect={handleSelectTag} selected= {handleCheckedtag("React")}  tagName="React" className="tag-btn"/>
                </div>
                <div className='header-select'>
                    <select className='header-status' name="status" value={taskData.status} onChange={handleChange}>
                        <option value="todo">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    <button type='submit' className='submit-btn'>Add Task</button>
                </div>
            </div>
      </form>
    </div>
  )
}

export default Header
