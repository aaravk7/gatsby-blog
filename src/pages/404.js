import React from 'react'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet';
import Image404 from '../styles/404.svg';

const NotFound = () => {
    return (
        <Layout>
            <Helmet title="404 | Aarav Khokhar" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>
                <img style={{ height: '50vh' }} src={Image404} alt="Page Not Found" />
            </div>
        </Layout>
    )
}

export default NotFound
