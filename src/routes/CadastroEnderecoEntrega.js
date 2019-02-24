import React, { Component } from 'react'
import TopbarCadastroCliente from "components/layout/TopbarCadastroCliente"
import NewEnderecoForm from 'components/conta/NewEnderecoForm';
export default class CadastroEnderecoEntrega extends Component {
  render() {
    return (
      <div>
        <TopbarCadastroCliente />
        <div>
            <NewEnderecoForm />
        </div>
      </div>
    )
  }
}
