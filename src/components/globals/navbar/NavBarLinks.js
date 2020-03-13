import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/#budget",
        text: "budget",
      },
      {
        id: 2,
        path: "/#services",
        text: "services",
      },
      {
        id: 3,
        path: "/#features",
        text: "features",
      },
      {
        id: 4,
        path: "/contact",
        text: "contact",
      },
      {
        id: 5,
        path: "/sign-up",
        text: "sign up",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.text}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    color: var(--darkGray);
    font-size: 0.8rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: var(--darkGray);
      color: var(--white);
      padding: 0.5rem 1.2rem;
    }
  }
  li:nth-child(6) {
    background: var(--mainBlue);
  }
  li:nth-child(6) > a {
    color: var(--white);
  }
  height: ${props => (props.open ? "330px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link{
      padding: 1rem 1.2rem;
      font-size: 1rem;
    }
    .nav-link:hover {
        background: var(--white);
        color: var(--mainBlue);
        padding: 1rem 1.2rem;
    }
    li:nth-child(6) > a:hover {
      color: var(--mainBlue);
    }
  }
`

export default NavBarLinks
