import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/project.module.css';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Projects({ data }) {
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Project Lists</h2>
                <h3>I wanna hopeful world :)</h3>
                <div className={styles.projects}>
                    {projects.map((item) => (
                        <Link
                            to={'/projects/' + item.frontmatter.slug}
                            key={item.id}
                        >
                            <Img
                                fluid={
                                    item.frontmatter.thumb.childrenImageSharp[0]
                                        .fluid
                                }
                            />
                            <h3>{item.frontmatter.title}</h3>
                            <p>{item.frontmatter.stack}</p>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at {contact} for a quote</p>
            </div>
        </Layout>
    );
}

// export page query
export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: [{ frontmatter: { date: DESC } }]) {
            nodes {
                id
                frontmatter {
                    slug
                    stack
                    title
                    date
                    thumb {
                        childrenImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`;
