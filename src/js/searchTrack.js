const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
import token from "./acces_token";
spotifyApi.setAccessToken(token);
export async function searchTrack(query, options){
    const track = await spotifyApi.searchTracks(query);
    console.log(track.body);
  }