import React, { Component } from 'react'

export default class NewEnderecoForm extends Component {
  render() {
    return (
      <div>
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationTooltip01">Descrição</label>
              <input type="text" class="form-control" id="validationTooltip01" placeholder="" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip02">Tipo Residencia</label>
              <input type="text" class="form-control" id="validationTooltip02" placeholder="" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip02">Tipo logradouro</label>
              <input type="text" class="form-control" id="validationTooltip02" placeholder="" required />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationTooltip03">Numero</label>
              <input type="text" class="form-control" id="validationTooltip03" placeholder="" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip04">Bairro</label>
              <input type="text" class="form-control" id="validationTooltip04" placeholder="" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip05">Cep</label>
              <input type="text" class="form-control" id="validationTooltip05" placeholder="" required />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationTooltip03">Pais</label>
              <input type="text" class="form-control" id="validationTooltip03" placeholder="" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip04">Estado</label>
              <input type="text" class="form-control" id="validationTooltip04" placeholder="" required />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationTooltip05">Cidade</label>
              <input type="text" class="form-control" id="validationTooltip05" placeholder="" required />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label for="validationTooltip05">Tipo Endereco</label>
              <select class="form-control">
                <option>Selecionar</option>
                <option>Cobrança</option>
                <option>Entrega</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Salvar</button>&nbsp;
          <button class="btn btn-danger" type="submit">Deletar</button>
        </form>
      </div>
    )
  }
}
