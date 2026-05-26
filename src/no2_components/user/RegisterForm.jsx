import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../no0_context/UserContext';

const initState = {
    id : "", username : "", password : "", confirmPW : ""
}

const RegisterForm = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    const handleChange = (event) => {
    const {name, value} = event.target;
        setUser(prev => (
            {...prev, [name]: value}
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.password !== user.confirmPW) {
            alert("비밀번호 일치하지 않음 >>>>>>>>>")
            return;
        }
        dispatch({type : "register", payload : {user}}) ;
        // setUsers(prev => (
        //     [...prev, {id:user.id, username:user.username, password:user.password}]
        // ))
        navigate("/login")
    }


    return (
        <div>
        <Container onSubmit={handleSubmit}>
            <Box>
            <Title>회원가입</Title>
            <div>
                <P>아이디 : </P> 
                <Input type='text' name='username' value={user.username} onChange={handleChange} placeholder='아이디 입력'/>
            </div>
            <div>
                <P>비밀번호 : </P> 
                <Input type='password' name='password' value={user.password} onChange={handleChange} placeholder='PW 입력'/>
            </div>
            <div>
                <P>비밀번호 확인 : </P> 
                <Input type='password' name='confirmPW' value={user.confirmPW} onChange={handleChange} placeholder='PW 재입력'/>
            </div>
            <RegisterBtn>가입하기</RegisterBtn>
            </Box>
        </Container>
        </div>
    )
}

export default RegisterForm

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
const P = styled.p`
    margin-bottom : 7px ;
    color : #1e293b ; 
    font-size : 13px ; 
    font-weight : 500 ;
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

const RegisterBtn = styled(Button)`
    background : #a1c3f5 ;
    color : #fefefe ;

    &:hover {
        background : #6fa7fa ;
    }
`
