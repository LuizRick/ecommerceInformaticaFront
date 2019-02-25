import React, { Component } from 'react'
import "./Style.css";
import Example from "./Example.svg";

export default class Card extends Component {
    render() {
        return (
            <div class="card syscard">
                <img src={Example} class="card-img-top" alt="Imagem do produto" />
                <div class="card-body">
                    <h5 class="card-title">Produto</h5>
                    <p class="card-text">
                        descricao do produto
                    </p>
                    <p class="card-text">
                        Estoque: 12
                    </p>
                    <p class="card-text">
                        Valor: R$ 112,122
                    </p>
                    <div style={{marginBottom:"3px"}}>
                        <input type="number" placeholder="quantidade" class="form-control"/>
                    </div>
                    <a href="/carrinho/listar" class="btn btn-primary">
                        Adicionar&nbsp;
                        <i class="fas fa-cart-arrow-down" />
                    </a>
                </div>
            </div>
        )
    }
}
