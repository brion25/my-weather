import React, { Fragment } from 'react'

import Header from './header'

type Props = {
  children?: React.Node,
}

class AppWrapper extends React.Component<Props> {
  render(){
    return (
      <Fragment>
        <Header/>
        {this.props.children}
      </Fragment>
    )
  }
}

export default AppWrapper
