"use client"

import React from 'react';
import './cadastro.css';
import ImageCadastro from './../img/foto.png';
import Image from 'next/image';
import {useState} from "react";
import {validEmail, validPassword} from './../utils/regex';
import Link from "next/link";



function CadastroPage() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [nomeErr, setNomeErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [senhaErr, setSenhaErr] = useState(false);

    const validate = () => {
        
        if(!validNome.test(nome)) {
            setNomeErr(true)
        }else{
            setNomeErr(false)
        }

        if(!validEmail.test(email)) {
            setEmailErr(true)
        }else{
            setEmailErr(false)
        }

        if(!validPassword.test(senha)) {
            setSenhaErr(true)
        }else{
            setSenhaErr(false)
        }

    }

    



    console.log({email,senha})

    function hanleSubmit(e){
        e.preventDefault();
        console.log(email +" - "+ senha)
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
                            <p className="texto-negrito-nome">Nome &nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <input type="text" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            className="txtEmail" 
                            placeholder="Insira seu nome" />
                            {nomeErr && <p>Por favor digite um nome valido</p>}
                        </div>
                        <div>
                            <p className="texto-negrito">Qual é o seu email?</p>
                            <input type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="txtEmail" 
                            placeholder="Insira seu email" />
                            {emailErr && <p>Por favor digite um email valido</p>}
                        </div>
                        <div>
                            <p className="texto-negrito-senha">Crie sua senha?</p>
                            <input type="password" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            className="txtEmail" 
                            placeholder="Insira sua senha" />
                            {senhaErr && <p>Por favor digite uma senha valido</p>}
                        </div>
                        <div>
                            <button type="submit" onClick={validate} href="#" className="inscrever-se">
                                Inscrever-se
                            </button>
                        </div>
                        <div>
                            <h5 >
                                Já tem uma conta? <Link href="/Login" className='login_cadastro'>Faça login</Link>
                            </h5>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CadastroPage;