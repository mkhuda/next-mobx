import Head from "next/head";

const HeadTag = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={`${props.description}`} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" href="/static/favicon.png" type="image/gif" sizes="32x32" />
  </Head>
);

export default HeadTag
