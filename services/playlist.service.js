const playlistModel = require('../models/playlist.model')

const getPlaylist = () => {
    return playlistModel.getPlaylist()
}

const getPlaylistByMostPlayed = () => {
    return playlistModel.getPlaylistByMostPlayed()
}
const getSongById = (id) => {
    return playlistModel.getSongById()
}

const addSong = ( title, artist, url ) => {
    return playlistModel.addSong(title, artist, url)
}

const playSong = (id) => {
    return playlistModel.playSong()
}

module.exports = { getPlaylist, getPlaylistByMostPlayed, addSong, getSongById, playSong }