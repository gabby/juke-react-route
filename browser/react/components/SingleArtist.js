import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Songs from './Songs';
import AllAlbums from './AllAlbums'

export default class SingleArtist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: {}
    }
    this.getArtist = this.getArtist.bind(this);
    this.getArtistAlbums = this.getArtistAlbums.bind(this);
    this.getArtistSongs = this.getArtistSongs.bind(this);
  }

  getArtist() {
      const artistId = this.props.match.params.artistId;
      return axios.get(`/api/artists/${artistId}`)
  }

  getArtistAlbums() {
      const artistId = this.props.match.params.artistId;
      return axios.get(`/api/artists/${artistId}/albums`)
  }

  getArtistSongs() {
      const artistId = this.props.match.params.artistId;
      return axios.get(`/api/artists/${artistId}/songs`)
  }

  componentDidMount() {
    Promise.all([this.getArtist(), this.getArtistAlbums(), this.getArtistSongs()])
    .then(result => {
        var artist = result[0].data
        artist.albums = result[1].data
        artist.songs = result[2].data
        this.setState({artist: artist})
    })
  }

  render () {
    return (
      <div>
        <h3>{this.state.artist.name}</h3>
        <h4>ALBUMS</h4>
        <div>
             <AllAlbums albums={this.state.artist.albums} /> 
        </div>
        <h4>SONGS</h4>
        <div><Songs songs={this.state.artist.songs}/></div>
    </div>
    );
  }
}