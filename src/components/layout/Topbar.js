/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Topbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">e-commerce</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" href="#">
                                Menu
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/admin/cliente/consulta">Consulta de clientes</a>
                                <a class="dropdown-item" href="/admin/cliente/pedidos">Pedidos clientes</a>
                                <a class="dropdown-item" href="/admin/produtos/cadastro">Cadastro Produtos</a>
                                <a class="dropdown-item" href="/admin/estoque/controle">Controle de estoque</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline mr-auto">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
                                <i class="fas fa-user" />&nbsp;
                                Ola usuario
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/cliente/cadastro">Meu Cadastro</a>
                                <a class="dropdown-item" href="/conta/trocasenha">Troca de senha</a>
                                <a class="dropdown-item" href="/conta/pedidos">Meus pedidos</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/carrinho/listar">
                                <i class="fas fa-shopping-cart" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
