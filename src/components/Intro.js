import React from 'react'
import styled from 'styled-components'

const Intro = ({ heading, subheading }) => {
  return (
    <IntroWrapper>
      <div className="box">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  display: flex;
  margin: 0rem auto;
  flex-direction: column;
  justify-content: flex-start;
  h2 {
    font-size: 1.5rem;
  }
  .box {
    width: 400px;
  }
  @media (min-width: 768px) {
    .box {
      width: 800px;
    }
  }
`

export default Intro