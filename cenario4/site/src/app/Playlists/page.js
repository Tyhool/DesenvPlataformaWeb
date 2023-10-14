import React from 'react';
import './playlists.css';
import playlists from "../data/playlist";
import Link from 'next/link';


function Playlists() {
    const playlistsFormat = playlists.map((playlist) => {
        return (
            <Link href={`/Playlists/detail/${playlist.id}`}>
                
                <div className='cartao'>
                    <div className='container__playlists_left'>
                        <img src={playlist.capa} className='playlists_imagem' alt='...' />
                        <div className=''>
                            <p className='playlists_nome'>{playlist.nome}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )

    });

    return (
        <div className='Playlists'>
            <div className='divisoria'>
                <h2>Podcasts</h2>
                <div className='lista'>
                    {playlistsFormat}
                </div>
            </div>
        </div>
    )
}

export default Playlists;

