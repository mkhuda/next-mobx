import React from "react";
import Example from "../components/Example";

export default class Test extends React.Component {
  static async getInitialProps({ query }) {
    return { slug: query.slug };
  }
  render() {
    return <h1>This is test page {this.props.slug}</h1>;
  }
}
