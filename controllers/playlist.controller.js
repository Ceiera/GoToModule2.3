const playlistService = require('../services/playlist.service')

const getPlaylist = () => {
    return playlistService.getPlaylist()
}

const getPlaylistByMostPlayed = () => {
    return playlistService.getPlaylistByMostPlayed()
}

const addSong = ( title, artist, url ) => {
    return playlistModel.addSong(title, artist, url)
}

const getSongById = (id) => {
    return playlistService.getSongById()
}

const playSong = (id) => {
    return playlistService.playSong()
}

module.exports = { getPlaylist, getPlaylistByMostPlayed, addSong, getSongById, playSong }