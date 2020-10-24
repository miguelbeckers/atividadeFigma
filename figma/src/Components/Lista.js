import React from 'react';
import './Lista.css';

export default({itens}) => {
    return(
        <div className="lista-area">
            <div className="lista-cabecalho">
                <div className="lista-titulo">Produtos</div>
                <div className="lista-botao">+</div>
            </div>
            <div className="lista-pesquisa">Pesquisar</div>
            <div>{typeof itens}</div>
            <div className="lista-produto">
                <div className="lista-produto-descricao">teste</div>
                <div className="lista-produto-preco">{`preco: R$`}</div>
            </div>
        </div>
    );
}
