"use client"
import React from "react";
import playlists from "../../../data/playlist";
import './../../playlists.css';
import Link from "next/link";


export default function Detail(props) {
  const idSelecionado = parseInt(props.params.id);



  const playlistSelecionada = playlists.find((playlist) => playlist.id === idSelecionado);

  const playlistNome = playlistSelecionada.nome;
  const playlistDescricao = playlistSelecionada.descricao;

  if (!playlistSelecionada) {
    return (
      <>
        <h1>Playlist não encontrada</h1>
      </>
    );
  }




  const podcast = playlistSelecionada.podcast.map((podcast) => (

    <div key={podcast.podId} className='cartao_podcast'>
      <div></div>
      <div className='playlists_nome_podcast'>
        <h2 >{podcast.podNome}</h2>

        <div className='playlists_audio_podcast'>
          <audio controls>
            <source src={podcast.podArquivo} type="audio/mp3" />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>
    </div>
  ));


  return (
    <div className='Playlists'>
      <div className='divisoria'>
        <h2>Podcasts: {playlistNome} </h2>
        <h2>Descrição: {playlistDescricao}</h2>
        <div className='lista'>
          {podcast}
        </div>
        <div>   
          <Link href ="/Playlists"className="cabecalho__menu__playlists">Voltar</Link>
        </div>
      </div>
    </div>
  )
}