import React from 'react'
import {Link} from 'react-router'
import IndividualAlbum from './IndividualAlbum'

export default React.createClass({
  getDefaultProps() {
     return {
      albums: [
        {
          album_name: "one",
          id: 0,
          images: [
            {
              image_src: "books.jpeg",
              image_title: "books"
            },{
              image_src: "coast.jpeg",
              image_title: "coast"
            },{
              image_src: "crater.jpeg",
              image_title: "crater"
            }
          ]
        },
        {
          album_name: "two",
          id: 1,
          images: [
            {
              image_src: "flower.jpeg",
              image_title: "flower"
            },{
              image_src: "greenstars.jpeg",
              image_title: "green stars"
            },{
              image_src: "hills.jpeg",
              image_title: "hills"
            }
          ]
        },
        {
          album_name: "three",
          id: 2,
          images: [
            {
              image_src: "jellyfish.jpeg",
              image_title: "jellyfish"
            },{
              image_src: "mountain.jpeg",
              image_title: "mountain"
            },{
              image_src: "nasa.jpeg",
              image_title: "outer space"
            }
          ]
        },
        {
          album_name: "four",
          id: 3,
          images: [
            {
              image_src: "oceancliffs.jpeg",
              image_title: "cliffs near ocean"
            },{
              image_src: "oceanclouds.jpeg",
              image_title: "clouds hovering over ocean"
            },{
              image_src: "ombreleaves.jpeg",
              image_title: "stack of leaves"
            }
          ]
        },
        {
          album_name: "five",
          id: 4,
          images: [
            {
              image_src: "river.jpeg",
              image_title: "river"
            },{
              image_src: "snowtrees.jpeg",
              image_title: "snowy pine trees at night"
            },{
              image_src: "strawberries.jpeg",
              image_title: "strawberries"
            }
          ]
        },
        {
          album_name: "six",
          id: 5,
          images: [
            {
              image_src: "succulent.jpeg",
              image_title: "succulent plant"
            },{
              image_src: "trees.jpeg",
              image_title: "trees"
            },{
              image_src: "whitewater.jpeg",
              image_title: "white water on river"
            }
          ]
        }
      ]
    }
  },
  componentWillMount() {
    this.setState(
    {
      currentAlbum: this.props.albums[0]
    }
    )
  },
  onHandleClickChangeAlbum() {
    this.setState(
      {
        currentAlbum: this.props.albums[2]
      }
    )
  },

  render() {
    return (
      <div>
        <section className="albums__links--list">
          {this.props.albums.map(function(album, i){
            return <h2 key={i} className="albums__links" onClick={this.onHandleClickChangeAlbum}>
              <Link to={`/albums/${album.album_name}`}>{album.album_name}
              </Link>
            </h2>
          },this)}
        </section>
        <IndividualAlbum album={this.state.currentAlbum}/>
      </div>
    )
  }
})
