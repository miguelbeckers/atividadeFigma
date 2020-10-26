import React from 'react';
import Menu from './Components/Menu';
import Lista from './Components/Lista';
import Cabecalho from './Components/Cabecalho';
import CriarEditarCliente from './Components/CriarEditarCliente';
import CriarEditarProduto from './Components/CriarEditarProduto';
import CriarPedido from './Components/CriarPedido';

export default () => {
  
  let opcao = 6;

  let clientes = [
    {
      nome: "Silvio Santos",
      aniversario: "12 de dezembro",
      produtos: []
    },
    {
      nome: "Augusto Liberato",
      aniversario: "10 de abril",
      produtos: []
    },
    {
      nome: "Xuxa Menegel",
      aniversario: "27 de março",
      produtos: []
    }
  ]

  let produtos = [
    {
      descricao: "tenis adidas",
      preco: 1234,
    },
    {
      descricao: "calça herig",
      preco: 238,
    },
    {
      descricao: "camisa polo",
      preco: 556,
    }
  ]

  let pedidos = [
    {
      cliente: clientes[1],
      produto: [
        produtos[1],
        produtos[2]
      ]
    },
    {
      cliente: clientes[0],
      produto: [
        produtos[0],
        produtos[1],
        produtos[2]
      ]
    }
  ]

  
  if(opcao == 1){  
    return(
      <div>
        <Menu />
        <Cabecalho titulo={"Pedidos"}/>
        <section className="lista-area">
          {pedidos.map((i, key)=>(
            <Lista key={key} info1={i.cliente.nome} info2={i.produto.length} info3={" produtos"}/>
          ))}
        </section>
      </div>
    );
  }

  else if(opcao == 2){
    return(
      <div>
        <Menu />
        <Cabecalho titulo={"Produtos"}/>
        <section className="lista-area">
          {produtos.map((i, key)=>(
            <Lista key={key} info1={i.descricao} info2={"Preço R$: "} info3={i.preco}/>
          ))}
        </section>
      </div>
    );
  }

  else if(opcao == 3){
    return(
      <div>
        <Menu />
        <Cabecalho titulo={"Clientes"}/>
        <section className="lista-area">
          {clientes.map((i, key)=>(
            <Lista key={key} info1={i.nome} info2={"Aniversario dia "} info3={i.aniversario}/>
          ))}
        </section>
      </div>
    );
  }

  else if(opcao == 4){  
    return(
      <div>
        <Menu />
        <Cabecalho titulo={"Pedidos"}/>
        <section className="lista-area">
          {pedidos.map((i, key)=>(
            <Lista key={key} info1={i.cliente.nome} info2={i.produto.length} info3={" produtos"}/>
          ))}
        </section>
        <CriarEditarCliente />
      </div>
    );
  }

  else if(opcao == 5){  
    return(
      <div>
        <Menu />
        <Cabecalho titulo={"Pedidos"}/>
        <section className="lista-area">
          {pedidos.map((i, key)=>(
            <Lista key={key} info1={i.cliente.nome} info2={i.produto.length} info3={" produtos"}/>
          ))}
        </section>
        <CriarEditarProduto />
      </div>
    );
  }

  else if(opcao == 6){  
    return(
      <div>
        <Menu />
        <Cabecalho titulo={"Pedidos"}/>
        <section className="lista-area">
          {pedidos.map((i, key)=>(
            <Lista key={key} info1={i.cliente.nome} info2={i.produto.length} info3={" produtos"}/>
          ))}
        </section>
        <CriarPedido />
      </div>
    );
  }
}