import React from "react"
import styled from "styled-components"

const SectionRow = ({ children, style }) => {
  return <SectionWrapper style={style}>{children}</SectionWrapper>
}

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 4rem auto;
`

export default SectionRow
