import React from "react"
import Header from "./sub/Header";
import Footer from "./sub/Footer";

class Base extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Base
