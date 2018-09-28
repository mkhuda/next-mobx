import React from 'react'
import Example from '../components/Example'
import HeadComponent from '../components/HeadComponent'

export default class Index extends React.Component {
  render () {
    return (
      <div>
      <HeadComponent title="bla bla test" description="bla bla description test" />
      <Example title='Example Page'/>
      </div>
    )
  }
}
