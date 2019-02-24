import React, { Component } from 'react'
import TopbarCadastroCliente from "components/layout/TopbarCadastroCliente";
import NewCartaoForm from "components/pagamento/NewCartaoForm";

export default class CadastroCartao extends Component {
  render() {
    return (
        <div>
            <TopbarCadastroCliente />
        <div>
            <NewCartaoForm />
        </div>
      </div>
    )
  }
}
