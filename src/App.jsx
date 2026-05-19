import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'
import EmployeePage from './no1_pages/EmployeePage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'

import styled from 'styled-components'

function App() {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <BrowserRouter>

      <HeaderBar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      <Layout>

        <SiderBar
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />

        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/employee" element={<EmployeePage />} />
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