import React from 'react';
import './../../App.css';
import ImageFaq from './../../images/audiow_2.png';

function Faq() {
    return (
            <div className='FAQ'>
                <main>
                    <div className="container__FAQ_left">
                        <img className="imagem__FAQ" src={ImageFaq} alt="FAQ Image" />
                    </div>
                    <div className="container__FAQ_right">
                        <div>
                            <p className="titulo_FAQ">COMO PODEMOS DE AJUDAR?</p>
                        </div>
                        <form>
                            <div>
                                <input
                                    type="text"
                                    className="txtAjuda"
                                    placeholder="Descreva o seu problema"
                                />
                            </div>
                            <div className="tabela">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="titulo-tabela" colSpan="2">
                                                Perguntas frequentes
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Perguntas</th>
                                            <th>Respostas</th>
                                        </tr>
                                        <tr>
                                            <td>Onde escutar?</td>
                                            <td>Pode escutar no site ou ...</td>
                                        </tr>
                                        <tr>
                                            <td>Tem conta pago?</td>
                                            <td>Tem varios tipos de pag...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
    );
}

export default Faq;
