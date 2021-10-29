import React from 'react';
import Layout from '../components/Layout';
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

export const query = graphql`
query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      content {
        raw
        references {
          ... on ContentfulAsset {
            title
            contentful_id
            __typename
            fluid(quality:100 , maxWidth:1000){
              src
              srcSet
            }
          }
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`
const options = {
  renderNode: {
    "embedded-asset-block": node => {
      const { fluid, title } = node.data.target
      if (!fluid) {
        // asset is not an image
        return null
      }
      return (
        <img src={fluid.src} alt={title} />
      )
    },
  },
}


const BlogTemplate = (props) => {
  const { content } = props.data.contentfulBlogPost

  return (
    <Layout>
      <Helmet title={`${props.data.contentfulBlogPost.title} | Aarav Khokhar`} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      {content && renderRichText(content, options)}
    </Layout>
  )
}

export default BlogTemplate
