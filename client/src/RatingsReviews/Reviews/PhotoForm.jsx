import React from 'react';
import PhotoTile from './PhotoTile.jsx';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photo: ''
    }
    this.addPhoto = this.addPhoto.bind(this);
  }

  addPhoto(e) {
    let temp = this.state.photos;
    let p = e.target.files[0]
    console.log(p);
    console.log(p.name)
    temp.push(p);
    this.setState({photos: temp, photo: p});
  }

  render() {
    return (
      <div>
        <em>this is a photo form</em>
        <input type="file" value={this.state.photo.name} onChange={this.addPhoto} name="hey" />
        {(this.props.photos.length > 0) &&
          (this.props.photos.map((photo, index) => (
            <PhotoTile key={index} photo={photo} />
          )))
        }

      </div>
    )
  }

}


export default PhotoForm;