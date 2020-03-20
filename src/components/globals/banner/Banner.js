import React from "react"
import styled from "styled-components"
import animation from '../../../images/animation.gif'

const Banner = ({ style, title, titleSmall, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h1 className="title">{title}</h1>
        <h2 className="titleSmall">{titleSmall}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
      <div className="box">
        <img
          style={{ margin: "0 auto" }}
          src={animation}
          alt="animation"
        />
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 3rem;
  color: var(--white);
  .box {
    flex-basis: 40%;
  }
  img {
    width: 100%;
  }
  .title,
  .subtitle {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .title {
    font-size: 3rem;
    line-height: 3.5rem;
    text-transform: uppercase;
  }
  .titleSmall {
    line-height: 4rem;
  }
  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
    justify-content: flex-start;
    margin-left: 1rem;
    .box {
      flex-basis: 100%;
    }
    img {
    width: 90%;
    }
    .titleSmall {
      font-size: 2rem;
      line-height: 2rem;
    }
    .subtitle {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`

export default Banner
