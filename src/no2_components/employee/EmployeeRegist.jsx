import React, { useState } from 'react'
import styled from 'styled-components';

const initEmpSt = [
  {id : "1", name : "John", email : "testttt@tttt.com", job: "frontend", pay: 600},
  {id : "2", name : "qqqq", email : "qqqq@tttt.com", job: "backend", pay: 600},
  {id : "3", name : "wwww", email : "wwww@tttt.com", job: "db", pay: 600},
  {id : "4", name : "eeee", email : "eeee@tttt.com", job: "ai", pay: 600}
]


const initEmp = {
  id : '', name : '', email : '', job : '', pay : ''
}

const initState = {
    empTable : initEmpSt,
    emp : initEmp
}

const reduce = (state, action) => {
    switch(action.type) {
        case "change" :
            const {name, value} = event.target ;
            return{...state, emp: {...state.emp, [name] : value}}
    }
}



const EmployeeRegist = ({setState}) => {
    const [emp, setEmp] = useState(initEmp);
    const handleChange = (event) => {
        const {name, value} = event.target ;
        setEmp((prev) => (
            {...prev, [name] : value}
        ))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        emp &&
        setState(prev => (
            {...prev, empTable: [...prev.empTable, {...emp, id: Date.now()}]}
        ))
        setEmp(initEmp)
        setState(prev => ({
            ...prev, selectedId : prev.empTable[prev.empTable.length-1].id
        }))
    }
    return (
        <>
        <Container onSubmit={handleSubmit}>
            <Box>
            <div>
                <p>이름 : </p>
                <Input type='text' name='name' value={emp.name} onChange={handleChange} placeholder='이름 입력'/>
            </div>
            <div>
                <label>이메일 : </label>
                <Input type='email' name='email' value={emp.email} onChange={handleChange} placeholder='이메일 입력'/>
            </div>
            <div>
                <label>직업 : </label>
                <Input type='text' name='job' value={emp.job} onChange={handleChange} placeholder='직업 입력'/>
            </div>
            <div>
                <label>급여 : </label>
                <Input type='number' name='pay' value={emp.pay} onChange={handleChange} placeholder='급여 입력'/>
            </div>
            <button>등록하기</button>
            </Box>
        </Container>
        
        </>
      )
}

export default EmployeeRegist

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

