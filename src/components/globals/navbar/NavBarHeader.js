import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/restaurant-marketing-hawaii-logo.png"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img className="logo" src={logo} alt="Restaurant Marketing Hawaii" />
      </Link>
      <FaAlignRight
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--DarkGray);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
  .logo {
    width: 25%;
  }
`

export default NavBarHeader
