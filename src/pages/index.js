import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';


const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Kitek"
          src="../images/kitek.jpg"
        />
    </Layout>   
)
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage