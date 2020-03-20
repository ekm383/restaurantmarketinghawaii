import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import ButtonWhite from "../components/globals/button/ButtonWhite"
import Chart from "../components/Chart"
import Intro from "../components/Intro"
import Section from "../components/globals/section/Section"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import imgIndex from "../images/bg/header-home.jpg"
import animation from "../images/animation.gif"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderIndex img={imgIndex}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          titleSmall="Restaurant Marketing Hawaii"
          subtitle="Running a restaurant is your passion, marketing your restaurant is ours. Better branding. Better results."
        >
          <AniLink fade to="/sign-up">
            <ButtonWhite>SIGN UP</ButtonWhite>
          </AniLink>
        </Banner>
        <img
          style={{ margin: "0 auto" }}
          src={animation}
          alt="animation"
          width="50%"
        />
      </Section>
    </HeaderIndex>

    <Section id="budget" style={{ height: "100vh" }}>
      <Chart />
    </Section>

    <Section id="services" style={{ height: "100vh" }}>
      <Intro heading="services" />
      <Features
        subheading="online ordering"
        content="We create convenient opportunities for potential or existing customers to order directly from your website and native custom branded iOS and Android apps."
      />
      <Features
        subheading="content creation"
        content="Do what you do best and let us take care of the rest. We always make sure there’s fresh video, photos, and copy to fill your website, social media account, monthly newsletter, In-store marketing and printed materials."
      />
      <Features
        subheading="Social Media Management"
        content="We make sure your message gets in front of the people who matter to your business. Our strategy leads potential and existing customers back to your website, keeping the inbound stream flowing."
      />
      <Features
        subheading="Agency Services"
        content="Running operations should be the most important role as a restaurant owner or manager. Figuring out where to advertise and how much to budget shouldn’t slow you down. As a solution, we offer unlimited services at a monthly rate."
      />
    </Section>

    <Section id="features" style={{ height: "100vh" }}>
      <Intro heading="features" />
      <Features
        subheading="Website Menu Integration"
        content="Your customers will never leave your website when ordering online. With menu images, upsales and social media integration, get the world’s most powerful online ordering solution. iOS and Android App available."
      />
      <Features
        subheading="Custom Branding"
        content="Get custom menus and pictures displayed how you want it so you’ll never look like a template! Our coders create the framework while our photographers shoot your food."
      />
      <Features
        subheading="POS Integration"
        content="We are partnered with Revel, Lightspeed, PAR Pixel Point, Nextep, Uniwell, Toast, and Micros allowing us to send orders directly to your POS system. If you don’t have one of these providers, we supply you with a free tablet or device for incoming orders."
      />
      <Features
        subheading="Cross Platform Marketing"
        content="Bring your social media, website, local SEO, and display marketing under one strategic plan. We build promotions, specials, updates and more around your online marketing presence, creating more conversions."
      />
    </Section>

    <Section id="pricing" style={{ height: "100vh" }}>
      <Intro
        heading="marketing package"
        subheading="Your customers will never leave your website when ordering online. With menu images, upsales, and social media integration, get the world's most powerful online ordering solution."
      />
      <Features
        subheading="$299 Setup Fee"
        content="(One-time, 2 year contract)"
      />
      <Features
        subheading="Custom Website"
        content="(React JS delivering quick sites)"
      />
      <Features
        subheading="Online Ordering"
        content="(20% fee on all online orders)"
      />
      <Features
        subheading="Instagram & Facebook Management"
        content="(Content uploads & targeted marketing)"
      />
      <Features
        subheading="Professional Photography"
        content="(One session/quarter)"
      />
      <Features
        subheading="Website Hosting"
        content="(Maintenance & security)"
      />
      <Features
        subheading="Search Engine Optimization"
        content="(Continuous content deployment)"
      />
      <Features
        subheading="In-Store Marketing Collateral"
        content="(Takeout menus, etc.)"
      ></Features>
      <AniLink fade to="/sign-up">
        <Button>SIGN UP</Button>
      </AniLink>
    </Section>

    <Section
      style={{
        width: "100vw",
        flexDirection: "column",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        background: "var(--mainBlue)",
      }}
    >
      <FaQuoteLeft style={{ margin: "15px", color: "white" }} />
      <Testimonials
        style={{ color: "white" }}
        content="I have worked with Restaurant Marketing Hawaii's team for several years now. They're an intelligent and very workable group to have on your side. More importantly, their creativity through their content creation is amazing."
        author="David Chang, Little Village Noodle House"
      />
      <FaQuoteRight style={{ margin: "15px", color: "white" }} />
    </Section>
  </Layout>
)

export default IndexPage
