import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderPage from "../components/globals/header/HeaderPage"
import imgSignUp from "../images/bg/header-sub.jpg"

const SignUpPage = () => {
  return (
    <Layout>
      <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
      <HeaderPage img={imgSignUp}>Sign Up</HeaderPage>
    </Layout>
  )
}

export default SignUpPage
