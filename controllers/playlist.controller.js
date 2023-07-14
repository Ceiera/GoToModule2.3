const playlistService = require('../services/playlist.service')

const getPlaylist = () => {
    return playlistService.getPlaylist()
}

const getPlaylistByMostPlayed = () => {
    return playlistService.getPlaylistByMostPlayed()
}

const addSong = ( title, artist, url ) => {
    if (!title || !artist || !url) {
        return 'Missing body'
    }
    return playlistModel.addSong(title, artist, url)
}

const getSongById = (id) => {
    if (!id) {
        return 'Missing param'
    }
    return playlistService.getSongById(id)
}

const playSong = (id) => {
    if (!id) {
        return 'Missing param'
    }
    return playlistService.playSong(id)
}

module.exports = { getPlaylist, getPlaylistByMostPlayed, addSong, getSongById, playSong }