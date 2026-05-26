import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'

import styled from 'styled-components'
import LoginPage from './no1_pages/user/LoginPage'
import RegisterPage from './no1_pages/user/RegisterPage'
import EmployeeProvider from './no0_context/EmployeeContext'
import UserProvider from './no0_context/UserContext'


function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  

  return (
    <BrowserRouter>
      {/* {console.log(users)} */}
      <UserProvider>
        <HeaderBar
        />
      </UserProvider>

      <Layout>

        <SiderBar
        />

        <Content>
          <Routes>
            <UserProvider>
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
            </UserProvider>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/employee" element={
              <EmployeeProvider>
                <EmployeePage />
              </EmployeeProvider>
              } />
          </Routes>
        </Content>

      </Layout>

    </BrowserRouter>
  )
}

export default App

const Layout = styled.div`
  display: flex;
  margin-top: 70px;
`

const Content = styled.main`
  flex: 1;
  margin-left: 240px;
  padding: 24px;
  min-height: calc(100vh - 70px);
  background-color: #f5f6fa;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`