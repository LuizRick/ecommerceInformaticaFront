import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import Root from './Root';
import Topbar from './components/layout/Topbar';
import './App.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});


const Carrinho = Loadable({
  loader: () => import('./routes/Carrinho'),
  loading: Loading,
});

const Pagamento = Loadable({
  loader: () => import('./routes/Pagamento'),
  loading: Loading,
})

const HomeCadastroCliente = Loadable({
  loader: () => import('./routes/HomeMeuCadastro'),
  loading: Loading,
})

const CadastroEnderecoEntrega =  Loadable({
  loader: () => import('./routes/CadastroEnderecoEntrega'),
  loading: Loading,
})

const CadastroCartao =  Loadable({
  loader: () => import('./routes/CadastroCartao'),
  loading: Loading,
})

const TrocaSenha =  Loadable({
  loader: () => import('./routes/TrocaSenha'),
  loading: Loading,
})

const ClientePedidos =  Loadable({
  loader: () => import('./routes/ClientePedidos'),
  loading: Loading,
})

const ConsultarClientes = Loadable({
  loader: () => import('./routes/ConsultarClientes'),
  loading: Loading,
})

const TransacoesCliente = Loadable({
  loader: () => import('./routes/TransacoesCliente'),
  loading: Loading,
})


const GerenciaPedidos = Loadable({
  loader: () => import('./routes/GerenciaPedidos'),
  loading: Loading,
})


const AdminVisualizarPedido = Loadable({
  loader: () => import('./routes/AdminVisualizarPedido'),
  loading: Loading,
})


const VisualizarPedido = Loadable({
  loader: () => import('./routes/VisualizarPedido'),
  loading: Loading,
})

const CadastroProduto = Loadable({
  loader: () => import('./routes/CadastroProduto'),
  loading: Loading,
})

const ConsultarProduto = Loadable({
  loader: () => import('./routes/ConsultarProduto'),
  loading: Loading,
})


class App extends Component {
  render() {
    return (
     <Router>
       <Root>
         <Topbar/>
         <div style={{marginTop:"50px"}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/carrinho/listar" component={Carrinho} />
            <Route exact path="/venda/pagamento" component={Pagamento} />
            <Route exact path="/cliente/cadastro" component={HomeCadastroCliente} />
            <Route exact path="/enderecosEntrega/novo" component={CadastroEnderecoEntrega} />
            <Route exact path="/cartao/novo" component={CadastroCartao} />
            <Route exact path="/conta/trocasenha" component={TrocaSenha} />
            <Route exact path="/conta/pedidos" component={ClientePedidos} />
            <Route exact path="/admin/cliente/consulta" component={ConsultarClientes} />
            <Route exact path="/admin/cliente/transacoes" component={TransacoesCliente} />
            <Route exact path="/admin/cliente/pedidos" component={GerenciaPedidos} />
            <Route exact path="/admin/pedido/visualizar" component={AdminVisualizarPedido} />
            <Route exact path="/pedido/visualizar" component={VisualizarPedido} />
            <Route exact path="/admin/produtos/cadastro" component={CadastroProduto} />
            <Route exact path="/admin/produtos/consultar" component={ConsultarProduto} />
         </div>
       </Root>
     </Router>
    );
  }
}

export default App;
