import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, change } from '../../no3_store/slices/todoSlice';
// import { TodoContext } from '../../no0_context/TodoContext';

const TodoInsert = () => {

    // const {state, dispatch} = useContext(TodoContext);
    // const {todoObj} = state ;
    const {todoObj} = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        // dispatch({type: "change", payload:{name,value}})
        dispatch(change({name, value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch({type: "insert"})
        dispatch(addTodo())

    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="subject" value={todoObj.subject} onChange={handleChange} required placeholder='할 일 입력'/>
      <button>입력</button>
    </form>
  )
}

export default TodoInsert
