import React from "react"
import Section from "../components/globals/section/Section"
import styled from "styled-components"

const Services1 = ({ header, content, img }) => {
  return (
    <Section>
      <ServicesWrapper>
        <div className="box content">
          <h2>{header}</h2>
          <p>{content}</p>
        </div>
        <div className="box">
          {/* Image width needs to match box width in pixels */}
          <img src={img} alt="sample" />
        </div>
      </ServicesWrapper>
    </Section>
  )
}

const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
  .box {
    width: 400px;
    padding: 10px;
    color: var(--gray);
  }
`

export default Services1
