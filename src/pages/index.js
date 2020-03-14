import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Services1 from "../components/Services1"
import imgIndex from "../images/bg/header-home.jpg"
import imgSample from "../images/sample-photo.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderIndex img={imgIndex}>
      <Banner
        title="Restaurant Marketing Hawaii"
        subtitle="Running a restaurant is your passion, marketing your restaurant is ours. Better branding. Better results."
      >
        <Link to="/sign-up">
          <Button>SIGN UP</Button>
        </Link>
      </Banner>
    </HeaderIndex>
    <Services1
      style={{ flexDirection: "row-reverse" }}
      header="CUSTOM WEBSITE DESIGN & MAINTENANCE"
      content="We have years of experience designing modern restaurant websites. We understand all the 3rd party technologies and plug-ins that it takes to make your business relevant in today’s market."
      img={imgSample}
    />
  </Layout>
)

export default IndexPage
