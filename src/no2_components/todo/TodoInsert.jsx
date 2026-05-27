import React, { useContext } from 'react'
import { TodoContext } from '../../no0_context/TodoContext';

const TodoInsert = () => {

    const {state, dispatch} = useContext(TodoContext);
    const {todoObj} = state ;

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({type: "change", payload:{name,value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "insert"})

    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="subject" value={todoObj.subject} onChange={handleChange} required placeholder='할 일 입력'/>
      <button>입력</button>
    </form>
  )
}

export default TodoInsert
