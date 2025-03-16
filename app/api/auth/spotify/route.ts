import { NextResponse } from 'next/server';
import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-library-read',
];

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
});

export async function GET() {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'state');
  return NextResponse.json({ url: authorizeURL });
} 