import React, { Component } from 'react'

export default class Root extends Component {
  render() {
    return (
      <div class="container-fluid with-footer">
        {this.props.children}
      </div>
    )
  }
}
