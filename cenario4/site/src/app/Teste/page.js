"use client"
import React from 'react';
import './login.css';
import ImageCadastro from './../img/foto.png';
import Image from 'next/image';
import { useState } from 'react';


export default function CadastroPage() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function handleSubmit(e) {
        e.preventDefault();

        console.log(email + " - " + senha);
    }
    return (
        <div className='cadastro'>
            <main className="container_cadastro" >
                <div className="centralizado">
                    <p className="cad1">CADASTRO</p>
                </div>
                <div className="centralizado">
                    <Image className="imagem__cadastro" src={ImageCadastro} alt="Cadastro" />
                </div>
                <div className="centralizado">

                    <form onSubmit={handleSubmit}>
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
                            <input type="text" onChange= { (e)=> setEmail(e.target.value) } className="txtEmail" placeholder="Insira seu email" />
                            
                        </div>
                        <div>
                            <p className="texto-negrito-senha">Crie sua senha?</p>
                        </div>
                        <div>
                            <input type="password" onChange={ (e)=> setSenha(e.target.value)} className="txtEmail" placeholder="Insira sua senha" required/>
                        </div>
                        <div>
                            <input type="submit" href="#" className="inscrever-se" value="Inscreva-se"/>
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