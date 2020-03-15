import React from "react"
import styled from "styled-components"

const Section = ({ children, style }) => {
  return (
    <SectionWrapper style={style}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
`

export default Section
