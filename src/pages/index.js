import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Home({ data }) {
    return (
        <Layout>
            <section className={styles.header}>
                <div>
                    <h2>Design</h2>
                    <h3>World & Universe</h3>
                    <p>I'm develsopher</p>
                    <Link className={styles.btn} to='/projects'>
                        My Portfolio
                    </Link>
                </div>
                <Img fluid={data.file.childImageSharp.fluid} />
                {/* <img
                    src='/banner.png'
                    alt='site banner'
                    style={{ maxWidth: '100%', borderRadius: '30px' }}
                /> */}
            </section>
        </Layout>
    );
}

export const query = graphql`
    query Banner {
        file(relativePath: { eq: "banner.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
