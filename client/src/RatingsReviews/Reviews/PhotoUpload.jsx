import React, {useRef} from 'react'

function PhotoUpload ({ onFileSelect }) {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelect(e.target.files[0])
  };

  return (
    <div className="file-uploader">
        <input type="file" onChange={handleFileInput} />
    </div>
  )
}


export default PhotoUpload;