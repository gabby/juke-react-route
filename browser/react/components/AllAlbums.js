import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllAlbums = (props) => {

    console.log("props", props);
    const albums = props.albums;

    return (
      <div>
        <div className="row">
        {
          albums && albums.map(album => {
            return (<div className="col-xs-4" key={ album.id }>
              <Link className="thumbnail" to={`/albums/${album.id}`} >
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>)
          })
        }
        </div>
      </div>
    );
}

export default AllAlbums;