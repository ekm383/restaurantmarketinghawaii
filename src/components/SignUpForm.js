import React from "react"
import styled from "styled-components"

const SignUpForm = () => {
  return (
    <FormWrapper>
      <form name="signup" method="POST" data-netlify-recaptcha="true" data-netlify="true">
        <h6>Personal Information</h6>
        <ul class="form-list">
          <li class="form-list__row">
            <label htmlFor="name">
              Name:
              <input id="name" type="text" name="name" required="true" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="email">
              Email Address:
              <input id="email" type="text" name="email" required="true" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="phone">
              Phone Number:
              <input id="phone" type="tel" name="phone" required="true" />
            </label>
          </li>
        </ul>

        <h6>Business Information</h6>
        <ul class="form-list">
          <li class="form-list__row">
            <label htmlFor="bizname">
              Business Name:
              <input id="bizname" type="text" name="bizname" required="true" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="bizaddress">
              Business Address:
              <input
                id="bizaddress"
                type="text"
                name="bizaddress"
                required=""
              />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="bizphone">
              Phone Number:
              <input id="bizphone" type="tel" name="bizphone" required="true" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="bizwebsite">
              Website:
              <input id="bizwebsite" type="tel" name="bizwebsite" required="" />
            </label>
          </li>
          <li class="form-list__row">
            <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
              Does your site need an update?
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <label htmlFor="yes">
                Yes
                <input type="radio" id="yes" name="newwebsite" value="yes" />
              </label>
              <label htmlFor="no">
                No
                <input type="radio" id="no" name="newwebsite" value="no" />
              </label>
            </div>
          </li>
          <li class="form-list__row">
            <label htmlFor="cars">
              <p style={{ fontSize: "0.7rem" }}>
                What POS System are you using?
              </p>
              <select id="cars" name="cars">
                <option value="revel">revel</option>
                <option value="lightspeed">lightspeed</option>
                <option value="parpixelpoint">par pixel point</option>
                <option value="nextep">nextep</option>
                <option value="uniwell">uniwell</option>
                <option value="toast">toast</option>
                <option value="micros">micros</option>
                <option value="na">n/a</option>
                <option value="other">other</option>
              </select>
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="hosting">
              Hosting Company Username & Password:
              <input id="hosting" type="text" name="hosting" required="" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="instagram">
              Instagram Name & Password:
              <input id="instagram" type="text" name="instagram" required="" />
            </label>
          </li>
          <li class="form-list__row">
            <label htmlFor="checks">
              Where would you like monthly checks to be mailed?
              <input id="checks" type="text" name="checks" required="" />
            </label>
          </li>
          <li class="form-list__row">
            <div data-netlify-recaptcha="true"></div>
          </li>
          <li>
            <button type="submit" class="button">
              sign up
            </button>
          </li>
        </ul>
      </form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  width: 80%;
  padding-bottom: 4rem;
  h6 {
    font-size: 1rem;
    margin: 0rem 0rem 1rem 0rem;
  }
  #cars {
    width: 50%;
    height: 30px;
    margin-top: 1rem;
  }
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .button {
    color: #ffffff;
    background-color: var(--mainBlue);
    padding: 12px 25px;
    margin-top: 1.5rem;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    border-radius: 2px;
    outline: 0;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
  .button:hover,
  .button:active,
  .button:focus {
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  .button--transparent {
    background: transparent;
    border: 0;
    outline: 0;
  }

  .button--close {
    position: absolute;
    top: 10px;
    left: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    border-radius: 50%;
    transition: all 0.25s;
    z-index: 10;
  }
  .button--close svg {
    width: 20px;
    height: 20px;
  }
  .button--close svg * {
    fill: currentColor;
  }
  .button--close:hover,
  .button--close:active,
  .button--close:focus {
    color: #fbcf34;
    background-color: #ffffff;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);
  }

  .button--info {
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    width: calc(100% - 10px);
    min-height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  input:valid {
    border-color: var(--mainBlue);
  }
  input:focus {
    outline: none;
    border-color: var(--mainBlue);
  }

  .form-list {
    padding-left: 0;
    list-style: none;
  }
  .form-list__row {
    margin-bottom: 25px;
  }
  .form-list__row label {
    position: relative;
    display: block;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 11px;
    color: var(--gray);
  }
  .form-list__row--inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__row--inline > :first-child {
    -ms-flex: 2;
    flex: 2;
    padding-right: 20px;
  }
  .form-list__row--inline > :nth-child(2n) {
    -ms-flex: 1;
    flex: 1;
  }
  .form-list__input-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__input-inline > * {
    width: calc(50% - 10px - 10px);
  }
  .form-list__row--agree {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .form-list__row--agree label {
    font-weight: 400;
    text-transform: none;
    color: #676767;
  }
  .form-list__row--agree input {
    width: auto;
    margin-right: 5px;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
`

export default SignUpForm
