import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      currentImage: this.props.album.images[0],
      modalCover: false
    }
  },
  onHandleClickExpandImage(e){
    this.setState(
      {
        currentImage: this.props.album.images[e.target.id],
        currentImageID: e.target.id,
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
  onHandleClickPrev(e){
    var newImageID = (Number(this.refs.modalImage.id) - 1);
    if(newImageID < 0){
      //do nothing
    }else{
      this.setState(
        {
          currentImage: this.props.album.images[newImageID],
          currentImageID: newImageID
        }
      )
    }
  },
  onHandleClickNext(e){
    var newImageID = (Number(this.refs.modalImage.id) + 1);
    if(newImageID >= this.props.album.images.length){
      //do nothing
    }else{
      this.setState(
        {
          currentImage: this.props.album.images[newImageID],
          currentImageID: newImageID
        }
      )
    }
  },
  render() {
    return (
      <div>
        <section>
          <h3 className="album__name">{this.props.album.album_name}</h3>
          {this.props.album.images.map((image, i) => {
            return <span key={i} className="photo__wrapper"><img className="single__image" key={i} id={i} onClick={this.onHandleClickExpandImage} src={`/assets/${image.image_src}`} alt={image.image_title}/></span>
          }, this)}
        </section>
        <div className={this.state.modalCover ? "modalShow" : "modalHide"}> <h2 className="exit__modal" onClick={this.onHandleClickExitModal}>X</h2><i className="fa fa-arrow-left fa-2x" onClick={this.onHandleClickPrev}></i><img className="modal__image" ref="modalImage" id={this.state.currentImageID} src={`/assets/${this.state.currentImage.image_src}`}/><i className="fa fa-arrow-right fa-2x" onClick={this.onHandleClickNext}></i>
        </div>
      </div>
    )
  }
})
