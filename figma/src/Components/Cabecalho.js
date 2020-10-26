import React from 'react';
import './Lista.css';

export default({titulo}) => {
    return(
        <div className="cabecalho-area">
            <div className="lista-cabecalho">
            <div className="lista-titulo">{titulo}</div>
                <div className="lista-botao">+</div>
            </div>
            <div className="lista-pesquisa">Pesquisar</div>
        </div>
    );
}
