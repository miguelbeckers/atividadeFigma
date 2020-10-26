import React from 'react';
import App from '../App';
import './Menu.css';

function cmd_click(opcao){
    App.opcao = opcao;
}

export default() => {
    return(
        <div className="menu-area">
            <div className="menu-titulo"> Loja </div>
            <div className="botoes-area">
                <div onClick={cmd_click(1)} href={`/App`} className="menu-botao">Pedidos</div>
                <div onClick={cmd_click(2)} href={`/App`} className="menu-botao">Produtos</div>
                <div onClick={cmd_click(3)} href={`/App`} className="menu-botao">Clientes</div>
            </div>
        </div>
    );
}