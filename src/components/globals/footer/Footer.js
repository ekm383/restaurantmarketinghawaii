import React, { Component } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <h4>Contact Information</h4>
          <p>
            1311 Kapiolani Blvd Suite
            <br />
            509 Honolulu, Hawaii 96814
          </p>
          <p className="phone">(808) 123-4567</p>
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="box map">map</div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  background: var(--darkGray);
  color: var(--white);
  p,
  .phone {
    font-size: 0.8rem;
  }
  .box {
    flex-basis: 40%;
    padding: 3rem;
  }
  .map {
    background: lightgray;
  }
  a {
    color: var(--white);
    font-size: 2rem;
    line-height: 6rem;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
  }
`

export default Footer
