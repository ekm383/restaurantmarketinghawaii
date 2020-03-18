import React from "react"
import imgSample from '../images/sample-photo.jpg'
import styled from 'styled-components'

const Graph = () => {
  return (
    <GraphWrapper>
      <img src={imgSample} alt="sample" width="400px" height="277px" />
    </GraphWrapper>
  )
}

const GraphWrapper = styled.div`
  flex-basis: 50%;
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`
export default Graph
