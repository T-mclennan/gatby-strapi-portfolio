import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        position
        description {
          id
          name
        }
        strapiId
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)
  const {allStrapiJobs: {nodes:jobs}} = data;
  const [value, setValue] = React.useState(0)
  const {company, position, date, description:desc} = jobs[value]
  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      {/* button container */}
      <div className="btn-container">
        {jobs.map((item, index) => {
          return <button 
                    key={item.strapiId} 
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
                    {item.company}
                  </button>
        })}
      </div>
      {/* jobs info */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        <ul>
        {
          desc.map((item) => {
            return <li><div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"/>
              <p>{item.name}</p>
            </div>
            </li>
          })
        }
        </ul>
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Jobs
