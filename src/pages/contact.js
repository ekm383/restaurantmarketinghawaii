import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderPage from "../components/globals/header/HeaderPage"
import imgContact from "../images/bg/header-sub.jpg"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
      <HeaderPage img={imgContact}>Contact</HeaderPage>
    </Layout>
  )
}

export default ContactPage
