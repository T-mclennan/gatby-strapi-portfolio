import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = () => {
  return <h2>blog page</h2>
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
        slug
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
