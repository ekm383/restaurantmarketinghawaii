import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import SectionRow from "../components/globals/section/SectionRow"
import SectionColumn from "../components/globals/section/SectionColumn"
import Services from "../components/Services"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
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

    <SectionRow id="budget" style={{ height: "100vh" }}>
      <SectionRow>
        <img src={imgSample} alt="sample" width="400px" height="277px" />
        <img src={imgSample} alt="sample" width="400px" height="277px" />
      </SectionRow>
    </SectionRow>

    <SectionRow id="services" style={{ height: "100vh" }}>
      <SectionRow>
        <Services
          style={{ margin: "0px 10px" }}
          header="custom website design & maintenance"
          content="We have years of experience designing modern restaurant websites. We understand all the 3rd party technologies and plug-ins that it takes to make your business relevant in today’s market."
        />
        <img src={imgSample} alt="sample" width="400px" />
        <Services
          subheader="online ordering"
          content="We create convenient opportunities for potential or existing customers to order directly from your website and native custom branded iOS and Android apps."
        />
        <Services
          subheader="content creation"
          content="Do what you do best and let us take care of the rest. We always make sure there’s fresh video, photos, and copy to fill your website, social media account, monthly newsletter, In-store marketing and printed materials."
        />
        <Services
          subheader="Social Media Management"
          content="We make sure your message gets in front of the people who matter to your business. Our strategy leads potential and existing customers back to your website, keeping the inbound stream flowing."
        />
        <Services
          subheader="Agency Services"
          content="Running operations should be the most important role as a restaurant owner or manager. Figuring out where to advertise and how much to budget shouldn’t slow you down. As a solution, we offer unlimited services at a monthly rate."
        />
      </SectionRow>
    </SectionRow>

    <SectionRow id="features" style={{ height: "100vh" }}>
      <SectionRow style={{ alignItems: "flex-start" }}>
        <Features
          feature="Website Menu Integration"
          content="Your customers will never leave your website when ordering online. With menu images, upsales and social media integration, get the world’s most powerful online ordering solution. iOS and Android App available."
        />
        <Features
          feature="Custom Branding"
          content="Get custom menus and pictures displayed how you want it so you’ll never look like a template! Our coders create the framework while our photographers shoot your food."
        />
        <Features
          feature="POS Integration"
          content="We are partnered with Revel, Lightspeed, PAR Pixel Point, Nextep, Uniwell, Toast, and Micros allowing us to send orders directly to your POS system. If you don’t have one of these providers, we supply you with a free tablet or device for incoming orders."
        />
        <Features
          feature="Cross Platform Marketing"
          content="Bring your social media, website, local SEO, and display marketing under one strategic plan. We build promotions, specials, updates and more around your online marketing presence, creating more conversions."
        />
      </SectionRow>
    </SectionRow>

    <SectionRow id="pricing" style={{ height: "100vh" }}>
      <SectionRow style={{ textAlign: "center" }}>
        <Banner
          style={{ width: "90vw", marginBottom: "1.5rem" }}
          titleSmall="digital marketing package"
          subtitle="your customers will never leave your website when ordering online. With menu images, upsales, and social media integration, get the world's most powerful online ordering solution."
        />
        <Features
          feature="$299 Setup Fee"
          content="(One-time, 2 year contract)"
        />
        <Features
          feature="Custom Website"
          content="(React JS delivering quick sites)"
        />
        <Features
          feature="Online Ordering"
          content="(20% fee on all online orders)"
        />
        <Features
          feature="Instagram & Facebook Management"
          content="(Content uploads & targeted marketing)"
        />
        <Features
          feature="Professional Photography"
          content="(One session/quarter)"
        />
        <Features
          feature="Website Hosting"
          content="(Maintenance & security)"
        />
        <Features
          feature="Search Engine Optimization"
          content="(Continuous content deployment)"
        />
        <Features
          feature="In-Store Marketing Collateral"
          content="(Takeout menus, etc.)"
        />
        <Link to="/sign-up">
          <Button style={{ marginTop: "4rem" }}>Sign Up</Button>
        </Link>
      </SectionRow>
    </SectionRow>

    <SectionColumn style={{ margin: "20px auto" }}>
      <Testimonials
        content="I have worked with Restaurant Marketing Hawaii's team for several years now. They're an intelligent and very workable group to have on your side. More importantly, their creativity through their content creation is amazing."
        author="David Chang"
        restaurant="Little Village Noodle House"
      />
    </SectionColumn>
  </Layout>
)

export default IndexPage
