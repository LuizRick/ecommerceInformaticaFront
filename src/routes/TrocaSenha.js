import React, { Component } from 'react'

export default class TrocaSenha extends Component {
  render() {
    return (
      <div>
        <form>
            <div class="form-group">
                <label for="validationTooltip05">Senha antiga</label>
                <input type="password" class="form-control" id="validationTooltip05" placeholder="Senha" required />
            </div>
            <div class="form-group">
                <label for="validationTooltip05">Nova senha</label>
                <input type="password" class="form-control" id="validationTooltip05" placeholder="Senha" required />
            </div>
            <div class="form-group">
                <label for="validationTooltip05">Confirmar senha</label>
                <input type="password" class="form-control" id="validationTooltip05" placeholder="Senha" required />
            </div>
            <button class="btn btn-success">salvar</button>
        </form>
      </div>
    )
  }
}
