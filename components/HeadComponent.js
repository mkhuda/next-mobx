import Head from "next/head";

const HeadComponent = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={`${props.description}`} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);

export default HeadComponent
