import React, { useRef, useState } from 'react';
import PhotoTile from './PhotoTile.jsx';
import PhotoUpload from './PhotoUpload.jsx';

function PhotoForm(props) {

  // const addPhoto = (e) => {
  //   let temp = this.state.photos;
  //   let p = e.target.files[0]
  //   console.log(p);
  //   console.log(p.name)
  //   temp.push(p);
  //   this.setState({photos: temp, photo: p.name});
  // }
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photosArray, addToArray] = useState([]);

  return (
    <div>
      <em>this is a photo form</em>
      <PhotoUpload
        onFileSelect={(file) => {
          setSelectedPhoto(file);
          addToArray(oldPhotos => [...oldPhotos, file]);
          props.addPhoto(file);
          console.log(file);
        }
        }
       />
      {(props.photos.length > 0) &&
        (props.photos.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        )))
      }

    </div>
  )
}

export default PhotoForm;