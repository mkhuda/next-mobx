import React from "react";
import BaseLayout from "../components/BaseLayout";
import HeadComponent from "../components/HeadComponent";
import Example from "../components/Example";
import axios from "axios";

export default class Test extends React.Component {
  static async getInitialProps({ query }) {
    const todos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/2",
    );
    return {
      slug: query.slug,
      maybe: query.maybe,
      data: todos.data,
    };
  }
  render() {
    return (
      <BaseLayout>
        <HeadComponent title={this.props.data.title} description="test description" />
        <h1>{this.props.data.title}</h1>
        <h1>This is test page {this.props.slug} & {this.props.maybe}</h1>
      </BaseLayout>
    );
  }
}
