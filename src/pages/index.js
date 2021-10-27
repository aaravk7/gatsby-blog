import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Home | Aarav Khokhar" />
      <h1>Home Page</h1>
      <p>Welcome to the Home.</p>
    </Layout>
  )
}

export default IndexPage;
