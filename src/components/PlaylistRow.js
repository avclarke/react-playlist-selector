import React, { Component } from 'react'

const thumbStyle = {
  paddingRight: '10px',
}
const labelStyle = { fontSize: 14 }

export default class PlaylistRow extends Component {
  state = {}

  constructor(props) {
    super(props)
    this.setStyles(props)
  }

  setStyles(props) {
    this.rowStyle = {
      paddingBottom: '8px',
      flexDirection: 'row',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.4s',
      cursor: 'pointer',
    }
  }

  onMouseOver = () => {
    this.setState({
      mouseOver: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      mouseOver: false,
    })
  }

  onClick = () => {
    this.props.onClickRow(this.props.playlist)
  }

  render() {
    const { playlist } = this.props
    const imageSize = this.props.imageSize || 35
    const image = playlist.images.length ? (
      <img
        src={playlist.images[0].url}
        style={thumbStyle}
        width={imageSize}
        height={imageSize}
      />
    ) : null
    const rowStyle = {
      ...this.rowStyle,
      opacity: this.state.mouseOver ? 0.7 : 1,
    }
    return (
      <div
        style={rowStyle}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}>
        {image}
        <p style={labelStyle}>{playlist.name}</p>
      </div>
    )
  }
}
