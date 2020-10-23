import React from 'react';
import './Menu.css';

function Menu() {
    return(
        <div className="menuArea">
            <div className="menuTitulo"> Nome da loja </div>
            <div className="botoesArea">
                <div href={`/`} className="menuBotoes">Pedidos</div>
                <div href={`/`} className="menuBotoes">Produtos</div>
                <div href={`/`} className="menuBotoes">Clientes</div>
            </div>
        </div>
    );
}

export default Menu;