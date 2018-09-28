import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: grey;
  padding: 10px;
`

@inject('store') @observer
class Example extends React.Component {
  onClickButton = () => {
    console.log(this.props);
    this.props.store.updateName();
  }
  onClickResetButton = () => {
    this.props.store.clearName();
  }
  render () {
    return (
      <Wrapper>
        <h1>{this.props.store.name}</h1>
        <button onClick={() => this.onClickButton()}>Let's Try</button>
        <button onClick={() => this.onClickResetButton()}>Reset</button>
      </Wrapper>
    )
  }
}

export default Example
