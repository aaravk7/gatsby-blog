import React from 'react'
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { blogList } from '../styles/blog.module.scss';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order:DESC }) {
        edges {
          node {
            title
            date(formatString:"MMM Do, YYYY")
            updatedAt(formatString:"MMM Do, YYYY")
            slug
          }
        }
      }
    }
    `)

  return (
    <Layout>
      <Helmet title="Blog | Aarav Khokhar" />
      <h1>Blog Page</h1>
      <ol className={blogList}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <Link to={`/blog/${edge.node.slug}`}>
              <li>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.date}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
