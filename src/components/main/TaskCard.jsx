import React from 'react'
import './TaskCard.css'
import Tag from '../Header/Tag'

function TaskCard({img,title,tag,handleDelete1,index}) {
  return (
    <div className='card'>
        <p className='card-heading'>{title}</p>
        <div className='card-bottom-section'>
            <div className='card-tag'>
              {
                tag.map((tag,index)=>{
                  return <Tag type="button" tagName={tag} selected={true} key={index} className="tag-btn" />
                })
              }

            </div>
            <div className='delete-task-card' onClick={()=> handleDelete1(index)}>
                <img src={img} alt="delete-icon" />
            </div>
        </div>
      
    </div>
  )
}

export default TaskCard
