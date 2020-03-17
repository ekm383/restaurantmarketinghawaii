import React from "react"
import styled from "styled-components"

const SectionColumn = ({ children, style }) => {
  return <SectionWrapper style={style}>{children}</SectionWrapper>
}

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  width: 400px;
  margin: 10px;
`

export default SectionColumn
