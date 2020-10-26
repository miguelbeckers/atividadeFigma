import React from 'react';
import './CriarEditarCliente.css';


export default() => {
    return(
        <div>
            <div className="fundo"></div>
            <div className="contentor">
                <div className="caixa">
                    <div className="linha-titulo">
                        <div className="titulo">Criar Cliente</div>
                        <div className="fechar">X</div>
                    </div>
                    <div className="linha">
                        <div className="titulo-campo">Cliente</div>
                        <input className="entrada"></input>
                    </div>
                    <div className="linha">
                        <div className="titulo-campo">Data de Nascimento</div>
                        <input className="entrada"></input>
                    </div>
                    <div className="linha-botao">
                        <div className="info-criacao">Data de criação</div>
                        <div className="botao-salvar">Salvar</div>
                    </div>
                </div>
            </div> 
        </div>
    )    
}