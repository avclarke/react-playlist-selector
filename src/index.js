import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'

import PlaylistRow from './components/PlaylistRow'

export default class Container extends Component {
  state = {}

  constructor(props) {
    super(props)
    this.spotify = new Spotify()
    this.spotify.setAccessToken(props.accessToken)
    this.fetchPlaylists()
  }

  async fetchPlaylists() {
    try {
      const { items } = await this.spotify.getUserPlaylists()
      this.setState({ playlists: items })
    } catch (err) {
      console.log('err: ', err)
      this.setState({
        error: err,
      })
    }
  }

  renderPlaylists() {
    if (this.state.playlists) {
      return this.state.playlists.map(p => {
        return (
          <PlaylistRow playlist={p} onClickRow={this.props.onSelectPlaylist} />
        )
      })
    }
  }

  render() {
    const playlists = this.renderPlaylists()
    return (
      <div>
        Spotify Playlists
        {playlists}
      </div>
    )
  }
}
