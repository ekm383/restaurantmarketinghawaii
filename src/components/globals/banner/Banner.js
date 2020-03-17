import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, titleSmall, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <h1 className="title">{title}</h1>
      <h2 className="titleSmall">{titleSmall}</h2>
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
    margin-bottom: 10px;
  }
  .title {
    font-size: 4rem;
    line-height: 3.5rem;
    text-transform: uppercase;
  }
  .titleSmall {
    font-size: 2rem;
    line-height: 1.8rem;
    margin-bottom: 0.5rem;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 400;
  }
`

export default Banner
