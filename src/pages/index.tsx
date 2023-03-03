import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
import { ProfilePicture } from '@site/src/features/profile/ProfilePicture';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">Hey there come in, I'm Javier</p>
        <p>You can find some stuff I've been up to here like:</p>
        <div className="spacer"/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/music">
            Music
          </Link>
          <div style={{padding: '1rem'}} />
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}