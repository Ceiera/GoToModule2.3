let playlist = [
    {
        id: 1,
        title: "Judul lagu",
        artist: "Artis 1",
        url: "ini url",
        count: 0
    },
    {
        id: 2,
        title: "Judul lagu",
        artist: "Artis 1",
        url: "ini url",
        count: 1
    }
]

const getPlaylist = () => {
    return playlist
}

const getPlaylistByMostPlayed = () => {
    const sorted = playlist.sort( (a , b) => 
        b.count - a.count  
    )
    return sorted
}

const addSong = ( title, artist, url ) => {
    const song = {
        id: parseInt(Date.now() + Math.floor(Math.random() * 100)),
        title: title,
        artist: artist,
        url: url,
        count: 0
    }
    playlist.push(song)
    return song
}

const getSongById = (id) => {
    return playlist.find( (x) => x.id == id)
}

const findIndexInPlaylist = (id) => {
    return playlist.findIndex( (x) => x.id == id )
}

const playSong = (index) => {
    playlist[index].count++
    return playlist[index]
}

module.exports = { getPlaylist, getPlaylistByMostPlayed, addSong, findIndexInPlaylist, getSongById, playSong }