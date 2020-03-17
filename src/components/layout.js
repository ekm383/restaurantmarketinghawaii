import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "../components/globals/navbar/NavBar"
import Footer from "../components/globals/footer/Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
