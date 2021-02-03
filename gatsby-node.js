const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          Slug
        }
      }
    }
  `)

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.Slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        Slug: blog.Slug,
      },
    })
  })
}
