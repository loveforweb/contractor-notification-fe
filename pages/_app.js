import { useEffect } from 'react';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import * as gtag from '../lib/gtag';
import '../styles/index.scss';
import 'aos/dist/aos.css';

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../styles/_variables.scss');

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout pageClass={pageProps.pageClass}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
