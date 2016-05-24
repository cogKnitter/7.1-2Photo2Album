import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
        <h3>{this.props.album_name}</h3>
        {this.props.album.images.map((image, i) => {
          return <span key={i} className="photo__wrapper"><img className="single__image" key={i} src={`/assets/${image.image_src}`} alt={image.image_title}/></span>
        })}
      </section>
    )
  }
})
