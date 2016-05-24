import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
      console.log(this.props);
    return (
      <section>
        <h3>{this.props.album.album_name}</h3>
        {this.props.album.images.map((image, i) => {
          return <span key={i} className="photo__wrapper"><img className="single__image" key={i} src={`/assets/${image.image_src}`} alt={image.image_title}/></span>
        }, this)}
      </section>
    )
  }
})
