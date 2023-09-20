import React from 'react';
import './../../App.css';
import ImageCadastro from './../../images/foto.png';

function CadastroPage() {
    return (
        <div className='cadastro'>
            <main className="container_cadastro" >
                <div className="centralizado">
                    <p className="cad1">CADASTRO</p>
                </div>
                <div className="centralizado">
                    <img className="imagem__cadastro" src={ImageCadastro} alt="Cadastro" />
                </div>
                <div className="centralizado">
                    <form>
                        <div>
                            <button type="button" href="#" className="btm__facebook">
                                Inscrever-se com o Facebook
                            </button>
                        </div>
                        <div>
                            <button type="button" href="#" className="btm__google">
                                Inscrever-se com o Google
                            </button>
                        </div>
                        <div>
                            <p>______________________ ou ______________________</p>
                        </div>
                        <div>
                            <p className="texto-negrito">Qual é o seu email?</p>
                        </div>
                        <div>
                            <input type="text" className="txtEmail" placeholder="Insira seu email" />
                        </div>
                        <div>
                            <p className="texto-negrito-senha">Crie sua senha?</p>
                        </div>
                        <div>
                            <input type="password" className="txtEmail" placeholder="Insira sua senha" />
                        </div>
                        <div>
                            <button type="button" href="#" className="inscrever-se">
                                Inscrever-se
                            </button>
                        </div>
                        <div>
                            <h5>
                                Já tem uma conta? <a href="#">Faça login</a>
                            </h5>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CadastroPage;