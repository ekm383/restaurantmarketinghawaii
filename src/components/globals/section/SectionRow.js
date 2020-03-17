import React from "react"
import styled from "styled-components"

const SectionRow = ({ id, children, style }) => {
  return (
    <SectionWrapper id={id} style={style}>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0rem auto;
`

export default SectionRow
