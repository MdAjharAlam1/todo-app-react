import React from 'react'
import './Tag.css'
function Tag({tagName,type,onSelect,selected,className}) {
  const styleTag = {
    HTML:{backgroundColor:"#fda821"},
    CSS:{backgroundColor:"#15d4c8"},
    JavaScript:{backgroundColor:"#ffd12c"},
    React:{backgroundColor:"#4cdafc"},
    default:{backgroundColor:"#f9f9f9"},
  }
  return (  
    <button style={selected ? styleTag[tagName] : styleTag.default} type={type} onClick={()=>onSelect(tagName)} className={className}>{tagName}</button>
  )
}

export default Tag
