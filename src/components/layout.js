import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "../components/globals/navbar/NavBar"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar />
      {children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
