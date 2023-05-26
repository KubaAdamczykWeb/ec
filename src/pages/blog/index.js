import * as React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My blog posts">            
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2> 
                        <p>Posted: {node.frontmatter.date}</p>                       
                    </article>
                ))
            }            
        </Layout>   
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {                
                frontmatter {
                    title
                    date(formatString: "\"MMMM D, YYYY\"")
                    slug
                }
                id                
            }
        }
    }
`;

export const Head = () => <Seo title="My blog posts" />;

export default BlogPage  

