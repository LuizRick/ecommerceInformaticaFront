import React, { Component } from 'react'

export default class TransacoesCliente extends Component {
  render() {
    return (
      <div>
        <div class="row">
            <div class="col-lg-12">
                <h1>Transações</h1>
                <table class="table table-dark">
                    <caption>Transações</caption>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th>Data/Hora</th>
                            <th>Pagamento</th>
                            <th>Valor total</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#115454548</td>
                            <td>15/02/2012 14:50:50</td>
                            <td>Cartao - tal , Bandeira: Master</td>
                            <td>R$ 1.171,56</td>
                            <td>TROCA</td>
                            <td>
                                <button class="btn btn-primary">Visualizar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>#115454549</td>
                            <td>15/02/2011 14:50:50</td>
                            <td>Cartao - tal , Bandeira: Dinners</td>
                            <td>R$ 1.171,56</td>
                            <td>PROCESSO</td>
                            <td>
                            <button class="btn btn-primary">despachar produto</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
