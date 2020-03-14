import React from "react"
import styled from "styled-components"

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 50vw;
  margin-left: 3rem;
  .title,
  .subtitle {
    color: var(--mainBlue);
    margin-bottom: 10px;
  }
  .title {
    font-size: 4rem;
    line-height: 3.5rem;
    text-transform: uppercase;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 400;
  }
`

export default Banner
