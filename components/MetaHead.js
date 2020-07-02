import Head from 'next/head';

const MetaHead = (props) => (
  <Head>
    <title>{props.title ? props.title : 'THEAPP - TITLE'}</title>
    {props.nofollow && <meta name="robots" content="noindex, nofollow"></meta>}
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta
      name="description"
      content={props.desc ? props.desc : 'THEAPP - DESCRIPTION'}
    />
    <meta name="keywords" content=""></meta>
    <meta
      name="og:title"
      property="og:title"
      content={props.title ? props.title : 'THEAPP - TITLE'}
    />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc ? props.desc : 'THEAPP - DESCRIPTION'}
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:title"
      content={props.title ? props.title : 'THEAPP - TITLE'}
    />
    <meta
      name="twitter:description"
      content={props.desc ? props.desc : 'THEAPP - DESCRIPTION'}
    />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <meta name="twitter:image" content="" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="images/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="images/icons/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="images/icons/favicon-16x16.png"
    />
    <link rel="manifest" href="manifest.json" />
    <link
      rel="mask-icon"
      href="images/icons/safari-pinned-tab.svg"
      color="#9fcc3b"
    />
    <meta name="msapplication-TileColor" content="#1b1e21" />
    <meta name="theme-color" content="#ffffff" />
    <script type="text/javascript" src="js/modernizr.js"></script>
  </Head>
);
export default MetaHead;
