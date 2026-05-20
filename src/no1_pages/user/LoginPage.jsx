import React from 'react'
import LoginForm from '../../no2_components/user/LoginForm'

const LoginPage = ({users, setLoginMD}) => {
  return (
    <LoginForm users={users} setLoginMD={setLoginMD}/>
  )
}

export default LoginPage
