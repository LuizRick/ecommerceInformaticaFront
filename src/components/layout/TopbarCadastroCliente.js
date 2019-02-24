import React, { Component } from 'react'

export default class TopbarCadastroCliente extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="/cliente/cadastro">Meus dados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/enderecosEntrega/novo">Endereços</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cartao/novo">Cartoes</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
