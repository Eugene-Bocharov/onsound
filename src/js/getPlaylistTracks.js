const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
import token from "./acces_token";
spotifyApi.setAccessToken(token);

export async function getPlaylistTracks(playlistId, playlistName) {

    const data = await spotifyApi.getPlaylistTracks(playlistId, {
      offset: 1,
      limit: 100,
      fields: 'items'
    })
    
  
   
    console.log("'" + playlistName + "'" + ' contains these tracks:');
  //   let tracks = [];
  
    for (let track_obj of data.body.items) {
      const track = track_obj.track;
      // console.log(track);
      
      // tracks.push(track);
      console.log(track.name + " : " + track.artists[0].name)
    }
  //   console.log("---------------+++++++++++++++++++++++++")
  //   return tracks;
  }