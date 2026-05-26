import React, { useContext, useEffect, useReducer, useState } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegist from '../no2_components/employee/EmployeeRegist'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import styled from 'styled-components'
import { EmployeeContext } from '../no0_context/EmployeeContext'

// const initEmpSt = [
//   {id : "1", name : "John", email : "testttt@tttt.com", job: "frontend", pay: 600},
//   {id : "2", name : "qqqq", email : "qqqq@tttt.com", job: "backend", pay: 600},
//   {id : "3", name : "wwww", email : "wwww@tttt.com", job: "db", pay: 600},
//   {id : "4", name : "eeee", email : "eeee@tttt.com", job: "ai", pay: 600}
// ]

// const initEmp = {
//   id : '', name : '', email : '', job : '', pay : null
// }

// const initState = {
//   empTable : initEmpSt,
//   emp : initEmp,
//   mode : '',
//   selectedId : ''
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "select":
//       return {
//         ...state,
//         selectedId : action.payload
//       }
//     case "set_emp" : 
//       return {
//         ...state,
//         emp : action.payload
//       }
//     case "register" :
//       return {
//         ...state,
//         empTable : [
//           ...state.empTable,
//           {
//             ...action.payload.emp,
//             id : action.payload.newId
//           }
//         ]
//       }
//       case "update" :
//         return {
//           ...state,
//           empTable : state.empTable.map(item => (
//             item.id === action.payload.id ?
//             action.payload : item
//           ))
//         }
//       case "delete" :
//         return {
//           ...state,
//           empTable : state.empTable.filter(item => (
//             item.id !== state.selectedId
//           ))
//         }
//       case "mode" :
//         return {
//           ...state,
//           mode : action.payload
//         }
//       default: 
//         return state ;
//   }
// }

const EmployeePage = () => {
  const {state, dispatch} = useContext(EmployeeContext);
  const {selectedId, empTable, mode} = state ;

  // const [state, dispatch] = useReducer(reducer, initState)
  // const [state, setState] = useState(initState);
  // const {empTable, emp, selectedId, mode} = state;

  useEffect(() => {
    selectedId &&
    dispatch({type:"set_emp", payload: empTable.filter(item => item.id ===selectedId)[0]})
    // setState(prev => (
    //   {...prev, emp: empTable.find(item => item.id === selectedId)}
    // ))
  }, [selectedId, empTable])

  const handleDelete = () => {

    if (!selectedId) {
      alert("삭제할 데이터 선택 >>>>>>>") ;
      return ;
    }

    dispatch({type:"delete"})

    // setState(prev => (
    //   {...prev
    //     , empTable: prev.empTable.filter(item => item.id !== selectedId)
    //     , emp : initEmp
    //     , selectedId : ""
    //   }
    // ))
  }

  return (
    <div>
      <EmployeeList state={state} dispatch={dispatch}/>
      <EmployeeTable state={state}/>
      <div>
        <button onClick={() => dispatch({type: "mode", payload:"register"})}>등록</button>
        <button onClick={() => dispatch({type: "mode", payload:"update"})}>수정</button>
        <button onClick={() => dispatch({type: "mode", payload:"delete"})}>삭제</button>
        {/* <Button onClick={() => setState(prev => ({...prev, mode: "regist"}))}>등록</Button> */}
        {/* <Button onClick={() => setState(prev => ({...prev, mode: "update"}))}>수정</Button> */}
        {/* <Button onClick={() => setState(prev => ({...prev, mode: "delete"}))}>삭제</Button> */}
      </div>
      {
        mode === "register" ? <EmployeeRegist/>
        : mode === "update" ? <EmployeeUpdate/>
        : <Button onClick={handleDelete}>데이터 삭제 ?</Button>
      } 
      
      
    </div>
  )
}

export default EmployeePage

const Container = styled.form`
    width : 100% ;
    height : 100vh ;

    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    background : #f1f5f9 ;

`
const Title = styled.h2`
    text-align : center ;
    margin-bottom : 32px ;
    color : #1e293b ; 
    font-size : 28px ; 

`
const Box = styled.div`
    width : 400px ;
    background : #f9fbfe ;
    padding : 40px ;
    border-radius : 16px ;
    box-shadow : 0 4px 20px rgba(0,0,0,0.08) ;
    margin : 3px ;

    display : flex ;
    flex-direction : column ;
`
const Input = styled.input`
    width : 100% ;
    padding : 14px 16px ;
    margin-bottom : 16px ;
    border : 1px solid #dbe4ee ;
    font-size : 16px ;
    outline : none ;

    transition : 0.2s ;
    &:focus {
        border-color : #3b82f6 ;
        box-shadow : 0 0 0 3px rgba(59, 130, 246, 0.15) ;
    }
`
const Button = styled.button`
    width : 100% ;
    border : none ;
    padding : 14px ;
    border-radius : 10px ;
    font-size : 15px ;
    font-weight : 600 ;
    cursor : pointer ;
    transition : 0.2s ;
    margin : 3px ;

`

const LoginBtn = styled(Button)`
    background : #a1c3f5 ;
    color : #fefefe ;

    &:hover {
        background : #6fa7fa ;
    }
`

const RegisterBtn = styled(Button)`
    background : transparent ;
    color : #85b4fa ;

    &:hover {
        color : #599afc ;
    }
`
