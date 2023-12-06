const express = require('express')
const app = express()
const port = 3006
app.use(express.json())

const db = require('./data/db.json')

    app.get('/playlists', (req, res) => {
        const filteredPlaylists = db.playlists.filter((playlist) => {
			return playlist.id && playlist.nome && playlist.capa && playlist.descricao;
        });

		// Envia as playlists filtradas para o cliente
		res.json(filteredPlaylists)
    
    })



    app.get('/playlists/:id',(req,res) => {
		// Obtém o id do podcast solicitado
		const id = req.params.id

		// Filtra as playlists pelo id
		const filteredPlaylists = db.playlists.filter((playlist) => {
			return playlist.id === id
		});

		// Verifica se o podcast foi encontrado
		if (filteredPlaylists.length === 0) {
			res.status(404).json({
				message: 'Playlist não encontrada'
			})
		} else {
			// Envia o podcast para o cliente
			res.json(filteredPlaylists[0])
		}
})
    
    app.post('/playlists', (req, res) => {
        const p = req.body;
        playlists.push(p);
        res.json(p)
    })

    app.get('/users/:email',(req,res) => {
		// Obtém o e-mail do usuário solicitado
		const email = req.params.email

		// Filtra os usuários pelo e-mail
		const filteredUsers = db.users.filter((user) => {
			return user.email === email
		});

		// Verifica se o usuário foi encontrado
		if (filteredUsers.length === 0) {
			res.status(404).json({
				message: 'Usuário não encontrado'
			})
		} else {
			// Envia o usuário para o cliente
			res.json(filteredUsers[0])
		}
})


app.post('/users',(req,res) => {
	const {nome,email,senha} = req.body;

	const novoUsuario = {
		nome,
		email,
		senha
	};

	db.users.push(novoUsuario);

	return res.json(db.users);

	});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})