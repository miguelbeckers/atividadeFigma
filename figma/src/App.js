import React from 'react';
import Menu from './Components/Menu';
import Lista from './Components/Lista';
import Dados from './Dados';

export default () => {
  let listaProdutos = Dados.getProdutos();
  
  let teste = [
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

  console.log(teste.length);

  return(
    <div>
      <Menu />
      <Lista items={teste}/>
    </div>
  );
}