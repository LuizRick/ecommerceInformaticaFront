import React, { Component } from 'react'

export default class Cartao extends Component {
  render() {
    return (
      <div class="cartao">
        <div>
            <input type="checkbox" name="cartao" />&nbsp;
            <b>Nome titular:</b> Fulano de tal
        </div>
        <div>
            <b>Numero Cartão: </b> 4445.6666.9999.9999
        </div>
        <div>
            <b>Validade: 13/02/2012</b>
        </div>
        Valor: <input type="text" value="100" />&nbsp;
        <button class="btn btn-primary">Incluir no pagamento</button>
      </div>
    )
  }
}
