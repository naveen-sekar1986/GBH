import React from 'react'

import styled from 'styled-components'

const Nav=styled.nav`
height:60px;
background:red;
`;

export const NavBar = () => {
  return (
    <Nav>
        <Logo>GBH</Logo>
        <MenuBars>
            <NavMenu>
                
            </NavMenu>
        </MenuBars>
        <h1>NavBar</h1>
    </Nav>
  )

}

export default NavBar