const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlist.controller')

//untuk playlist normal
router.get('/', (req, res) => {
    try {
        const playlist = playlistController.getPlaylist()
        res.status(200).send(playlist)
    } catch (error) {
        res.status(500).send({ error: "server error" })
    }
})

//untuk playlist sorted most played
router.get('/most', (req, res) => {
    try {
        const playlist = playlistController.getPlaylistByMostPlayed()
        res.status(200).send(playlist)
    } catch (error) {
        res.status(500).send({ error: "server error" })
    }
})

router.post('/add', (req, res) => {
    try {
        const playlist = playlistController.getPlaylistByMostPlayed()
        res.status(200).send(playlist)
    } catch (error) {
        res.status(500).send({ error: "server error" })
    }
})

//untuk cek lagu
router.get('/song/:id', (req, res) => {
    try {
        const id = req.params.id
        const playlist = playlistController.getSongById(id)
        res.status(200).send(playlist)
    } catch (error) {
        res.status(500).send({ error: "server error" })
    }
})

//untuk play lagu
router.put('/song/:id', (req, res) => {
    try {
        const id = req.params.id
        const playlist = playlistController.playSong(id)
        res.status(200).send(playlist)
    } catch (error) {
        res.status(500).send({ error: "server error" })
    }
})

module.exports = router