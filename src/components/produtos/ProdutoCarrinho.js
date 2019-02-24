import React, { Component } from 'react'
import Example from "./Example.svg";
import "./Style.css";


export default class ProdutoCarrinho extends Component {
  render() {
    return (
      <div>
        <div class="produto-imagem">
            <div class="imagem">
                <img src={Example} alt="produto" width="100" height="50"/>
            </div>
            <div class="info">
                <p class="prod-desc">
                    Nome do produto
                </p>
            </div>
        </div>
      </div>
    )
  }
}
