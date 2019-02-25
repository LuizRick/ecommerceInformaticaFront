import React, { Component } from 'react'

export default class ControleEstoque extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <nav>
              <ul class="nav nav-pill">
                <li class="nav-item">
                  <a class="nav-link active" href="/admin/estoque/controle">Entrada</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/admin/estoque/baixa">Baixa</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form>
              <h4>Entrada estoque</h4>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Produto</label>
                  <select class="form-control">
                    <option>Produto 1</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Quantidade</label>
                  <input type="number" class="form-control" />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Fornecedor</label>
                  <select class="form-control">
                    <option>Fornecedor 1</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Valor custo</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-3">
                  <label for="inputEmail4">Data Entrada</label>
                  <input type="date" class="form-control" />
                </div>
                <div class="col-md-3 mb-12">
                  <label>Valor de venda</label>
                  <div class="input-group">
                    <input type="text" class="form-control" />
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                        Gerar valor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
