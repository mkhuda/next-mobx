import React from "react"

class BaseLayout extends React.Component {
  render {
    return(
      <div>
        <h1>Layout</h1>
        {this.props.children}
      </div>
    )
  }
}
