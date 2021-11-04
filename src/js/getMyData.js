const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi();
import token from "./acces_token";
spotifyApi.setAccessToken(token);
import { getUserPlaylists } from "./getUserPlaylists";
export const getMyData = () => {
    (async () => {
      const me = await spotifyApi.getMe();
      // console.log(me.body);
      getUserPlaylists(me.body.id);
      
    })().catch(e => {
      console.error(e);
    });
  }