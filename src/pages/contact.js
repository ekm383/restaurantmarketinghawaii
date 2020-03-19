import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderPage from "../components/globals/header/HeaderPage"
import imgContact from "../images/bg/header-sub.jpg"
import Section from "../components/globals/section/Section"
import Testimonials from "../components/Testimonials"
import Intro from "../components/Intro"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
      <HeaderPage img={imgContact} />
      <Section style={{ flexDirection: "column", margin: "20px auto" }}>
        <Intro heading="Who We Are" />
        <Testimonials
          style={{ width: "100%" }}
          content="We are a full service Marketing and Ad Agency designed specifically for Hawaii Restaurants. From content creation to e-commerce we provide all the services needed to stay relevant. As the former owners and marketers of Aloha 2 Go we have over a decade of experience marketing hundreds of local restaurants. These experiences have provided us with unique skills in online ordering, digital marketing, content creation, and media buying. We are excited to share what we have learned first hand over the years owning and operating a delivery service, a restaurant, and a marketing agency."
          author="If you have questions or changes for us, please call (808) 757-9203 or email us at kurt@schonolulu.com."
        />
      </Section>
      <Section>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default ContactPage
