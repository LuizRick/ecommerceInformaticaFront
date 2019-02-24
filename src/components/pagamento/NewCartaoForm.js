import React, { Component } from 'react'

export default class NewCartaoForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="nomeTitular">Nome titular</label>
                        <input type="text" class="form-control" id="nomeTitular" placeholder="Titular" />
                    </div>
                    <div class="form-group">
                        <label for="nomeTitular">Numero Cartão</label>
                        <input type="text" class="form-control" id="nomeTitular" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="bandeira">Bandeira</label>
                        <select class="form-control">
                            <option>MasterCard</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nomeTitular">Codigo segurança</label>
                        <input type="text" class="form-control" id="nomeTitular" placeholder="" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Salvar no perfil</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Salvar</button>&nbsp;
                    <button type="submit" class="btn btn-danger">Deletar</button>
                </form>
            </div>
        )
    }
}
