import React, { Component } from 'react';
import Card from 'components/produtos/Card';

export default class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <h1>Ultimos Produto</h1>
            </div>
            <div class="col-sm">
                <Card />
            </div>
            <div class="col-sm">
                <Card />
            </div>
            <div class="col-sm">
                <Card />
            </div>
        </div>
      </div>
    )
  }
}
