const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
import token from "./acces_token";
import musicCards from "../templates/musicCards.hbs"

spotifyApi.setAccessToken(token);

const topTracksList = document.querySelector(".main_top_container");
const bottomTracksList = document.querySelector(".main_bottom_container");


export async function getPlaylistTracks(playlistId, playlistName) {

    const topData = await spotifyApi.getPlaylistTracks(playlistId, {
      offset: 199,
      limit: 7,
      fields: 'items'
    })
    let topTracksMarkup = ``;
    for (let track_obj of topData.body.items) {
      const track = track_obj.track;
      
      topTracksMarkup += musicCards(track);
    }
    topTracksList.insertAdjacentHTML("beforeend", topTracksMarkup);

    
    const bottomData = await spotifyApi.getPlaylistTracks(playlistId, {
      offset: 249,
      limit: 7,
      fields: 'items'
    })
    let bottomTracksMarkup = ``;
    for (let track_obj of bottomData.body.items) {
      const track = track_obj.track;
      
      bottomTracksMarkup += musicCards(track);
    }
    bottomTracksList.insertAdjacentHTML("beforeend", bottomTracksMarkup);
    
  };

  

  