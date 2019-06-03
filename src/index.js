import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'

export default class Container extends Component {
  constructor(props) {
    this.spotify = new SpotifyWebApi()
  }

  render() {
    return <div>Spotify Playlists</div>
  }
}
