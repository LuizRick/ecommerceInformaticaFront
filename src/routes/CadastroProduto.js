import React, { Component } from 'react'

export default class CadastroProduto extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <nav>
                            <ul class="nav nav-pill">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/admin/produtos/consultar">Formulario de consulta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="/admin/produtos/estoque">Estoque</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <form>
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip01">Descrição</label>
                                    <input type="text" class="form-control" id="validationTooltip01" placeholder="" value="" required />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip02">Marca</label>
                                    <input type="text" class="form-control" id="validationTooltip02" placeholder="" required />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip02">Modelo</label>
                                    <input type="text" class="form-control" id="validationTooltip02" placeholder="" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip03">Peso</label>
                                    <input type="text" class="form-control" id="validationTooltip03" placeholder="" required />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip04">Altura</label>
                                    <input type="text" class="form-control" id="validationTooltip04" placeholder="" required />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip05">Largura</label>
                                    <input type="text" class="form-control" id="validationTooltip05" placeholder="" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip05">Grupo precificação</label>
                                    <select class="form-control">
                                        <option>Grupo 1</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip05">Departamento</label>
                                    <select class="form-control">
                                        <option>Hardware</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="validationTooltip02">Codigo de barras</label>
                                    <input type="text" class="form-control" id="validationTooltip02" placeholder="" required />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-3 mb-12">
                                    <label>Valor entrada estoque</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-3 mb-12">
                                    <label>Margem de lucro</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-3 mb-12">
                                    <label>Valor de venda</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="col-md-3 mb-12">
                                    <label>Valor de Custo</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-12 mb-12">
                                    <label>Caracteristicas gerais</label>
                                    <textarea class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="form-row" style={{marginTop:"12px"}}>
                                <div class="col-md-12">
                                    <button class="btn btn-primary" type="submit">Salvar</button>&nbsp;
                                    <button class="btn btn-danger" type="submit">Deletar</button>&nbsp;
                                    <button class="btn btn-success" type="submit">Gerar valor de venda automatico</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
