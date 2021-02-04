import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from '../components/SEO'

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return <Layout>
    <SEO title="Projects" description="Projects Page for Tristan Mclennan" />
    <section className="projects-page">
      <Projects projects={projects} title="all projects"/>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {}}) {
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
  }
`

export default ProjectsPage
