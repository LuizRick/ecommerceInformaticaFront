import React, { Component } from 'react'

export default class CarrinhoEnderecoItem extends Component {
    render() {
        return (
            <div class="endereco">
                <div class="endereco-item">
                    <input type="radio" checked={this.props.isChecked} name="enderecoEntrega"/>
                    <span>Nome endereco</span>
                    <div class="endereco-descricao">
                        <div>R. TAl, 33</div>
                        <div>BAIRRO TAL - CIDADE - ESTADO</div>
                        <div>CEP: 08570661</div>
                    </div>
                </div>
                <div class="endereco-actions">
                    <a class="btn btn-primary" href="/enderecosEntrega/novo">Editar endereco</a>
                </div>
            </div>
        )
    }
}
