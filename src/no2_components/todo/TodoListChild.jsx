import React, { useContext, useState } from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { remove, setTodo, toggle } from '../../no3_store/slices/todoSlice'
// import { TodoContext } from '../../no0_context/TodoContext'

const TodoListChild = ({item}) => {

    // const {state, dispatch} = useContext(TodoContext);
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(item.subject)

    
    const handleToggle = () => {
        // dispatch({type:"toggle", payload: item.id})
        // dispatch(toggle(item.id)) html 단에 바로 호출
    }

    const handleUpdate = () => {

        // dispatch({type:"update", payload: {id:item.id, value}})
        dispatch(setTodo({id:item.id, value}));

        setEditing(false)
    }

    const handleDelete = () => {
        // dispatch({type:"delete", payload: item.id})
        // dispatch(remove(item.id)) // html단에 바로 호출
    }


  return (
    <div>
        <div onClick={() => dispatch(toggle(item.id))}>
            {
                item.checked ? 
                <MdCheckBox/> : <MdCheckBoxOutlineBlank/>    
            }
        </div>
        <div>
            {
                editing ?
                <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                onBlur={handleUpdate} 
                onKeyDown={(e) => {if (e.key==="Enter") handleUpdate() ;        
                }} autoFocus
            />
            :
            <Checked $checked = {item.checked} onDoubleClick={() => setEditing(true)}>
                {item.subject}
            </Checked>
            }        
        </div>
        <div onClick={() => dispatch(remove(item.id))}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  )
}

export default TodoListChild

const Checked = styled.div`
    text-decoration: ${({$checked}) =>
        ($checked ? "line-through" : "none")
    } 
`
