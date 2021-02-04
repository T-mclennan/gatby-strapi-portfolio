import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'

const Blog = ({data: {allStrapiBlogs: {nodes: blogs}}}) => {
  return <Layout> 
    <SEO title="Blog" description="Blog Page for Tristan Mclennan" />
    <section className="blog-page">
      <Blogs blogs={blogs} title="blog page"/> 
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        Slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`


export default Blog
