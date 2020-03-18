import React from 'react'
import styled from 'styled-components'

const Features = ({ heading, subheading, content, style }) => {
  return (
    <FeaturesWrapper style={style}>
      <div>
        <h2>{heading}</h2>
        <h4>{subheading}</h4>
        <p>{content}</p>
      </div>
    </FeaturesWrapper>
  )
}

const FeaturesWrapper = styled.div`
  flex-basis: 48%;
  margin-bottom: 1rem;
  h4 {
    color: var(--mainBlue);
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    h2 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }
`

export default Features