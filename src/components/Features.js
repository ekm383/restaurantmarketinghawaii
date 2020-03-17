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
  width: 400px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default Features