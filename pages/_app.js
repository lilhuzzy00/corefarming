import React from 'react';
import '../styles/globals.scss';
import '../styles/home.css';
import { Layout } from '../components';

export const dynamic = "force-dynamic";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
