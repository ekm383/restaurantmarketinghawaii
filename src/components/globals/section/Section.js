import React from "react"
import styled from "styled-components"

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.div`
  padding: 4rem 0;
  width: 90vw;
  margin: 0 auto;
`

export default Section
