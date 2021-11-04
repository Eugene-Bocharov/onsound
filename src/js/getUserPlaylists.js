const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
import token from "./acces_token";
spotifyApi.setAccessToken(token);
import { getPlaylistTracks } from "./getPlaylistTracks";
export async function getUserPlaylists(userName) {
    
    const data = await spotifyApi.getUserPlaylists(userName)
  
    console.log("---------------+++++++++++++++++++++++++")
    let playlists = []
  
    for (let playlist of data.body.items) {
      console.log(playlist.name + " " + playlist.id)
      
      let tracks = await getPlaylistTracks(playlist.id, playlist.name);
      
  
      
    }
  }