import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby"
const Blog = ({id, title, image, date, category, Slug, desc}) => {
  return (
    <Link to={`/blogs/${Slug}`} className="blog" key={id}>
      <article>
        {image &&
          <Image fluid={image.childImageSharp.fluid} objectPosition="0% 0%" />
        }
        <div className="blog-card">
          <h4>{title || 'default title'}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
    )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Blog
