import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {
  console.log(data)

  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs:{nodes:blogs},
  } = data;


  return (
  <Layout>
    <Hero/>
    <Services />
    <Jobs/>
    <Projects projects={projects} title="featured projects" showLink/>
    <Blogs blogs={blogs} title="latest articles" showLink/>
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        id
        github
        feature_list {
          feature
          id
        }
        description
        stack {
          title
          id
        }
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allStrapiBlogs(limit: 3, sort: {fields: date, order: DESC}) {
      nodes {
        Slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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
