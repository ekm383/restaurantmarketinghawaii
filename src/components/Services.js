import React from "react"
import styled from "styled-components"

const Services = ({ header, subheader, content, style }) => {
  return (
    <ServicesWrapper style={style}>
      <div className="box">
        <h2>{header}</h2>
        <h6>{subheader}</h6>
        <p>{content}</p>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
  h6 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5rem;
  }
  .box {
    width: 400px;
    color: var(--gray);
  }
`

export default Services
