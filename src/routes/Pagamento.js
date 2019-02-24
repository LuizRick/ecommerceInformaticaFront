import React, { Component } from 'react'
import ProdutoCarrinho from "components/produtos/ProdutoCarrinho";
import Cartao from "components/pagamento/Cartao";
import NewCartaoForm from "components/pagamento/NewCartaoForm";
export default class Pagamento extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Valor unitário</th>
                                    <th>Quantidade</th>
                                    <th>Subtotal</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <Cartao />
                        <Cartao />
                        <Cartao />
                    </div>
                    <div class="col-lg-6">
                        <div class="pay-info"><b>Frete: </b> R$42,33 </div>
                        <div class="pay-info"><b>Total: </b> R$ 342,33</div>
                        <div class="pay-info"><b>A pagar:</b>R$ 200,00</div>
                        <fieldset>
                            <legend>Finalização</legend>
                            <div class="form-group">
                                <input type="text" placeholder="Cupom de compra" class="form-control" />
                                <br />
                                <button class="btn btn-primary">Adionar cupom compra</button>&nbsp;
                                <a href="/conta/pedidos" class="btn btn-success">Finalizar Compra</a>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div style={{ marginTop: "12px" }}>
                            <fieldset>
                                <legend>Novo Cartão</legend>
                                <NewCartaoForm />
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
