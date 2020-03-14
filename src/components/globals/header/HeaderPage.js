import React from "react"
import styled from "styled-components"

const HeaderPage = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(25vh - 68px);
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export default HeaderPage
