import React from 'react'
import styled from 'styled-components'

const HeaderBar = ({ mobileMenu, setMobileMenu }) => {
  return (
    <Container>

      <LeftBox>

        <MenuButton
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </MenuButton>

        <Logo>
          Logo
        </Logo>

      </LeftBox>

      <RightBox>
        <HeaderButton>로그인</HeaderButton>
        <HeaderButton>회원가입</HeaderButton>
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
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

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