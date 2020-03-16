import React from 'react'
import styled from 'styled-components'

const Features = ({ feature, content, style }) => {
  return (
    <FeaturesWrapper style={style}>
      <div>
        <h4>{feature}</h4>
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