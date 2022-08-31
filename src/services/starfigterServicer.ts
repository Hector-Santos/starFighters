import starFighrter


export async function addSongToPlaylist(songId, playlistId, userId) {
	const firstUserStaGazes = 

	const playlist = await playlistRepository.findById(playlistId);
	if (!playlist) return null;

	const song = await songRepository.findById(songId);
	if (!song) return null;

	if (playlist.userId !== user.id) return null;

	const playlistSongs = await playlistRepository.getPlaylistSongs(playlistId);
	const songInPlaylist = playlistSongs.find(song => song.id === songId);
	if (songInPlaylist) return null;

	await playlistRepository.addSongToPlaylist(songId, playlistId);
}