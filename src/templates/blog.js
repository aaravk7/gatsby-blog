import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from 'gatsby';

export const query = graphql`
query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      date(formatString:"MMM Do, YYYY")
      content {
        json
      }
    }
  }
`

console.log(query);


const BlogTemplate = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img src={url} alt={alt} />
      }
    }
  }

  return (
    <Layout>
      <Helmet title={`${props.data.contentfulBlogPost.title} | Aarav Khokhar`} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.date}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.content.json, options)}
    </Layout>
  )
}

export default BlogTemplate
