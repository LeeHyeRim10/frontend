import React, { useContext, useState } from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md"
import styled from 'styled-components'
import { TodoContext } from '../../no0_context/TodoContext'

const TodoListChild = ({item}) => {

    const {state, dispatch} = useContext(TodoContext);

    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(item.subject)

    
    const handleToggle = () => {
        dispatch({type:"toggle", payload: item.id})
    }

    const handleUpdate = () => {

        dispatch({type:"update", payload: {id:item.id, value}})

        setEditing(false)
    }

    const handleDelete = () => {
        dispatch({type:"delete", payload: item.id})
    }


  return (
    <div>
        <div onClick={handleToggle}>
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
        <div onClick={handleDelete}>
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
