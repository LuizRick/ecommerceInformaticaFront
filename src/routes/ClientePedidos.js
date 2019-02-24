import React, { Component } from 'react'

export default class ClientePedidos extends Component {
  render() {
    return (
      <div>
        <div class="row">
            <div class="col-lg-12">
                <table class="table table-dark">
                    <caption>Meus Pedidos</caption>
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
                            <td>EM PROCESSAMENTO</td>
                            <td>
                                <a href="/pedido/visualizar" class="btn btn-primary">
                                   Visualizar
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>#115454549</td>
                            <td>15/02/2011 14:50:50</td>
                            <td>Cartao - tal , Bandeira: Dinners</td>
                            <td>R$ 1.171,56</td>
                            <td>ENTREGUE</td>
                            <td>
                                <a href="/pedido/visualizar" class="btn btn-primary">
                                   Visualizar
                                </a>
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
