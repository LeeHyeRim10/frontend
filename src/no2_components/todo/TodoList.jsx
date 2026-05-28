import React, { useContext } from 'react'
import TodoListChild from './TodoListChild'
import { useSelector } from 'react-redux'
// import { TodoContext } from '../../no0_context/TodoContext'


const TodoList = () => {

  // const {state} = useContext(TodoContext);
  // const {todoList} = state;
  const {todoList} = useSelector(state => state.todo);

  return (
    <div>
      {todoList?.map(item => (
        <TodoListChild key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default TodoList
