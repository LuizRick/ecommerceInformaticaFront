import React, { Component } from 'react'
import ProdutoCarrinho from "components/produtos/ProdutoCarrinho";

export default class AdminVisualizarPedido extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card syscard">
                            <div class="card-body">
                                <h5 class="card-title">Pedido: #109201920192</h5>
                                <p class="card-text">Data hora: 15/02/2012 14:50:50</p>
                                <p class="card-text">Total: R$ 800,00</p>
                                <p class="card-text">Status: EM TROCA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Valor unitário</th>
                                    <th>Quantidade</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><ProdutoCarrinho /></td>
                                    <td>R$ 200,00</td>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        R$ 400,00
                                    </td>
                                    <td>
                                        <input type="number" placeholder="quantidade de retorno"
                                        class="form-control" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2">
                        <button class="btn btn-primary">
                            Autorizar troca
                        </button>
                    </div>
                    <div class="col-lg-2">
                        <button class="btn btn-primary">
                            Despachar Produtos
                        </button>
                    </div>
                    <div class="col-lg-2">
                        <button class="btn btn-primary">
                            Confirmar Troca
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
