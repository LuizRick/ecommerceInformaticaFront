import React, { Component } from 'react'

export default class ClienteCadastroForm extends Component {
    render() {
        return (
            <div>
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip01">Nome</label>
                            <input type="text" class="form-control" id="validationTooltip01" placeholder="" value="Mark" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip02">Data nascimento</label>
                            <input type="date" class="form-control" id="validationTooltip02" placeholder="" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip02">CPF</label>
                            <input type="text" class="form-control" id="validationTooltip02" placeholder="" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip03">Telefone</label>
                            <input type="text" class="form-control" id="validationTooltip03" placeholder="(11)9090-9090" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip04">Email</label>
                            <input type="text" class="form-control" id="validationTooltip04" placeholder="email" required />
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationTooltip05">Senha</label>
                            <input type="password" class="form-control" id="validationTooltip05" placeholder="Senha" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                            <label for="validationTooltip05">Endereco entrega</label>
                            <select class="form-control">
                                <option>Desccrição endereço</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationTooltip05">Endereco cobrança</label>
                            <select class="form-control">
                                <option>Desccrição endereço</option>
                            </select>
                        </div>
                        <div class="col-md-5 mb-4">
                            <label>Genero</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label class="form-check-label" for="exampleRadios1">
                                    M
                            </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label class="form-check-label" for="exampleRadios2">
                                    F
                            </label>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Salvar</button>
                </form>
            </div>
        )
    }
}
