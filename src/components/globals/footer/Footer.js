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
        <div className="footerContainer">
          <div className="box contact">
            <h4>Contact Information</h4>
            <p>
              1311 Kapiolani Blvd Suite
              <br />
              509 Honolulu, Hawaii 96814
            </p>
            <p>(808) 123-4567</p>
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
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  margin-top: 4rem;
  background: var(--darkGray);
  color: var(--white);
  .footerContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    flex: 25%;
    padding: 4rem;
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
`

export default Footer
