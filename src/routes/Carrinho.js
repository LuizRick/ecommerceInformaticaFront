import React, { Component } from 'react'
import ProdutoCarrinho from "components/produtos/ProdutoCarrinho";
import CarrinhoEnderecoItem from "components/conta/CarrinhoEnderecoItem";

export default class Carrinho extends Component {

    constructor(props) {
        super(props);
        this.state = { subtotal: 200.00, qtd: 1 };
    }

    handlerSubtotal(event) {
        this.setState({
            subtotal: event.target.value * 200.00,
            qtd: event.target.value
        });
    }

    hadlerCepChange(event) {

    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg">
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
                                        <input type="number" value={this.state.qtd}
                                            onChange={this.handlerSubtotal.bind(this)} />
                                    </td>
                                    <td>
                                        R$ {this.state.subtotal.toFixed(2)}
                                    </td>
                                    <td>
                                        <button class="btn btn-danger">
                                            &times;
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg">
                        <h1>Selecione o endereço de entrega</h1>
                        <CarrinhoEnderecoItem isChecked={true} />
                        <CarrinhoEnderecoItem />
                        <CarrinhoEnderecoItem />
                    </div>
                    <div class="col-lg">
                        <div>
                            <h6>frete:</h6>
                            <span>R$: 39,33</span>
                        </div>
                        <hr />
                        <div>
                            <h6>subtotal:</h6>
                            <span>R$: 239,33</span>
                        </div>
                        <hr />
                        <div>
                            <button class="btn btn-primary">Calcular Frete</button>
                            &nbsp;
                            <a class="btn btn-success" href="/venda/pagamento">Fechar Pedido</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
