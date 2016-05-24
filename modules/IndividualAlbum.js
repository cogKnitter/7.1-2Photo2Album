import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      currentImage: this.props.album.images[0],
      modalCover: false
    }
  },
  onHandleClickChangeImage(e){
    console.log(this.state.currentImage.image_src);
    this.setState(
      {
        currentImage: this.props.album.images[e.target.id],
        modalCover: true
      }
    )
  },
  onHandleClickExitModal(e){
    this.setState(
      {
        modalCover: false
      }
    )
  },
  render() {
    return (
      <div>
        <section>
          <h3>{this.props.album.album_name}</h3>
          {this.props.album.images.map((image, i) => {
            return <span key={i} className="photo__wrapper"><img className="single__image" key={i} id={i} onClick={this.onHandleClickChangeImage} src={`/assets/${image.image_src}`} alt={image.image_title}/></span>
          }, this)}
        </section>
        <div className={this.state.modalCover ? "modalShow" : "modalHide"}> <h2 className="exit__modal" onClick={this.onHandleClickExitModal}>X</h2> <img className="modal__image" src={`/assets/${this.state.currentImage.image_src}`}/>
        </div>
      </div>
    )
  }
})
