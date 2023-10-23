"use client"

import React from 'react';
import './login.css';
import {useState} from "react";
import {validEmail, validPassword} from './../utils/regex';
import Link from "next/link";



function CadastroPage() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [emailErr, setEmailErr] = useState(false);
    const [senhaErr, setSenhaErr] = useState(false);

    const validate = () => {
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
                    <p className="cad1">Login</p>
                </div>
                <div className="centralizado">
                    <form>
                        <div>
                            <p className="texto-negrito">Email</p>
                            <input type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="txtEmail" 
                            placeholder="Insira seu email" />
                            {emailErr && <p>Por favor digite um email valido</p>}
                        </div>
                        <div>
                            <p className="texto-negrito-senha">Senha</p>
                            <input type="password" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            className="txtEmail" 
                            placeholder="Insira sua senha" />
                            {senhaErr && <p>Por favor digite uma senha valido</p>}
                        </div>
                        <div>
                            <button type="submit" onClick={validate} Link href="/usuario" className="inscrever-se">
                                Logar
                            </button>
                        </div>
                        <div>
                            <h5 >
                                Não tem uma conta? <Link href="/Cadastro" className='login_cadastro'>Inscrever</Link>
                            </h5>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default CadastroPage;