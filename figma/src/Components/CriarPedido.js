import React from 'react';
import './CriarPedido.css';


export default() => {
    return(
        <div>
            <div className="fundo"></div>
            <div className="contentor">
                <div className="caixa">
                    <div className="linha-titulo">
                        <div className="titulo">Criar Pedido</div>
                        <div className="fechar">X</div>
                    </div>
                    <div className="linha">
                        <div className="titulo-campo">Cliente</div>
                        <select className="entrada">
                            <option>Ednaldo Pereira</option>
                            <option>Jailson Mendes</option>
                            <option>Sergio Berranteiro</option>
                        </select>
                    </div>
                    <div className="linha">
                        <div className="titulo-campo">Produtos no pedido</div>
                    </div>
                    <div className="caixa-adicao">
                        <div className="texto-adicionar">Adicionar Produto</div>
                        <div className="simbolo-adicionar">+</div>
                    </div>
                        
                    <div className="alinhar-embaixo">
                        <div className="linha-botao">
                            <div className="info-criacao">Data de criação</div>
                            <div className="botao-salvar">Salvar</div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )    
}