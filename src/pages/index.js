import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from '../components/globals/section/Section'
import Services from "../components/Services"
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

    <Section style={{ flexDirection: 'row', margin: '4rem auto' }}>
      <Services
        style={{ margin: '0px 10px' }}
        header="CUSTOM WEBSITE DESIGN & MAINTENANCE"
        content="We have years of experience designing modern restaurant websites. We understand all the 3rd party technologies and plug-ins that it takes to make your business relevant in today’s market."
      />
      <img src={imgSample} alt="sample" width="400px" />
    </Section>

    <Section style={{ flexDirection: 'row', margin: '4rem auto', alignItems: 'flex-start' }}>
      <Section style={{ flexDirection: 'column-reverse', width: '400px', margin: '10px' }}>
        <Services
          subheader="ONLINE ORDERING"
          content="We create convenient opportunities for potential or existing customers to order directly from your website and native custom branded iOS and Android apps."
        />
        <img src={imgSample} alt="sample" width="400px" />
      </Section>
      <Section style={{ flexDirection: 'column-reverse', width: '400px', margin: '10px' }}>
        <Services
          subheader="CONTENT CREATION"
          content="Do what you do best and let us take care of the rest. We always make sure there’s fresh video, photos, and copy to fill your website, social media account, monthly newsletter, In-store marketing and printed materials."
        />
        <img src={imgSample} alt="sample" width="400px" />
      </Section>
    </Section>

  </Layout>
)

export default IndexPage
