import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../no0_context/UserContext'

const HeaderBar = () => {

  const {state, dispatch} = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const {isLogin} = state ;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({type:"logout"})
    // setLoginMD(prev => (
    //   {...prev, isLogin: false, username: ''}
    // ))
    alert("로그아웃 성공 ")
    navigate("/login")
  }

  return (
    <Container>

      <LeftBox>

        <MenuButton
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </MenuButton>

        <Logo>
          CRUD PROJECT
        </Logo>

      </LeftBox>

      <RightBox>
        {isLogin ? // true
          <div>
            <HeaderButton>{state.username?.username}님</HeaderButton>  
            <HeaderButton onClick={handleLogout}>로그아웃</HeaderButton>  
          </div>
          : // false
          <div>
            <HeaderButton onClick={()=>navigate("/login")}>로그인</HeaderButton>
            <HeaderButton onClick={()=>navigate("/register")}>회원가입</HeaderButton>
          </div>
        }
      </RightBox>

    </Container>
  )
}

export default HeaderBar

const Container = styled.header`
  width: 100%;
  height: 70px;

  background-color: #1e293b;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;
`

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
`

const RightBox = styled.div`
  display: flex;
  gap: 12px;
`

const HeaderButton = styled.button`
  padding: 8px 14px ;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin : 3px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`

const MenuButton = styled.button`
  display: none;

  background: none;
  border: none;

  color: white;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`