import React from 'react';
import './Menu.css';

function Menu() {
    return(
        <div className="menu-area">
            <div className="menu-titulo"> Nome da loja </div>
            <div className="botoes-area">
                <div href={`/`} className="menu-botao">Pedidos</div>
                <div href={`/`} className="menu-botao">Produtos</div>
                <div href={`/`} className="menu-botao">Clientes</div>
            </div>
        </div>
    );
}

export default Menu;