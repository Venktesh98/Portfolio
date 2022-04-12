import React from 'react'

function TodoItem({item,onClick}) {
  return (
    <li onClick={onClick}>{item.text}</li>
  )
}

export default TodoItem