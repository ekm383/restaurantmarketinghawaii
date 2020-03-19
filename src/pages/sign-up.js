import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderPage from "../components/globals/header/HeaderPage"
import imgContact from "../images/bg/header-sub.jpg"
import Section from "../components/globals/section/Section"
import Intro from "../components/Intro"
import SignUpForm from "../components/SignUpForm"

const SignUp = () => {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
      <HeaderPage img={imgContact} />
      <Section style={{ marginTop: "20px" }}>
        <Intro heading="sign up" />
      </Section>
      <Section>
        <SignUpForm />
      </Section>
    </Layout>
  )
}

export default SignUp
