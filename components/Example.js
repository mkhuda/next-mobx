import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'

@inject('store') @observer
class Example extends React.Component {
  onClickButton = () => {
    console.log(Math.random());
  }
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={() => this.onClickButton()}>Let's Try</button>
      </div>
    )
  }
}

export default Example
