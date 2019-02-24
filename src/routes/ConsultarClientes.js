import React, { Component } from 'react'

export default class ConsultarClientes extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip01">Nome</label>
                            <input type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark"  />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip02">Data nascimento</label>
                            <input type="date" class="form-control" id="validationTooltip02" placeholder=""  />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip02">CPF</label>
                            <input type="text" class="form-control" id="validationTooltip02" placeholder=""  />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip03">Telefone</label>
                            <input type="text" class="form-control" id="validationTooltip03" placeholder="(11)9090-9090"  />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip04">Email</label>
                            <input type="text" class="form-control" id="validationTooltip04" placeholder="email"  />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip04">Status</label>
                            <select class="form-control">
                                <option>ativo</option>
                                <option>inativo</option>
                            </select>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Consultar</button>
                </form>
                <div style={{marginTop:"12px"}}>
                    <table class="table table-dark">
                        <caption>Resultado pesquisa</caption>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>nascimento</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fulado da Silva Santos</td>
                                <td>03/03/1993</td>
                                <td>405266998-96</td>
                                <td>(11)8980-0908</td>
                                <td>fulano.silva@gmail.com</td>
                                <td>
                                    <a href="/admin/cliente/inativar" class="btn btn-danger">Inativar</a>&nbsp;
                                    <a href="/admin/cliente/transacoes" class="btn btn-primary">Consultar transações</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
