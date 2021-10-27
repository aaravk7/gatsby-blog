import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const about = () => {
    return (
        <Layout>
            <Helmet title="About | Aarav Khokhar" />
            <h1>About Page</h1>
        </Layout>
    )
}

export default about
