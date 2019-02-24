import React, { Component } from 'react'
import ClienteCadastroForm from "components/conta/ClienteCadastroForm"
import TopbarCadastroCliente from "components/layout/TopbarCadastroCliente"
export default class HomeMeuCadastro extends Component {
    render() {
        return (
            <div>
                <TopbarCadastroCliente />
                <div>
                    <ClienteCadastroForm />
                </div>
            </div>
        )
    }
}
