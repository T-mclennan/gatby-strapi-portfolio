import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return <Layout>
    <SEO title="404" description="Page not found" />
    <main className="error-page">
      <div className="error-container">
        <h1>Oops! Page not found.</h1>
        <Link to="/" className="btn">Back Home</Link>
      </div>
    </main>
  </Layout>
}

export default Error
