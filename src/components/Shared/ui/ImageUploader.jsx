  import React, { useEffect, useRef, useState } from 'react';
  import '../../../styles/ImageUpload.css'

  function ImageUploader({setImage,image}) {
    const [previewSrc, setPreviewSrc] = useState(image || null);
    const fileInputRef = useRef(null);
    const dropAreaRef = useRef(null);

    useEffect(() => {
      if(image){
        setPreviewSrc(image);
      }
    },[image]);
    const handleDragOver = (e) => {
      e.preventDefault();
      dropAreaRef.current.classList.add('highlight');
    };

    const handleDragLeave = () => {
      dropAreaRef.current.classList.remove('highlight');
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dropAreaRef.current.classList.remove('highlight');
      const files = e.dataTransfer.files;
      handleFiles(files);
    };

    const handleFiles = (files) => {
      if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPreviewSrc(e.target.result);
            setImage(e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please upload an image file');
        }
      }
    };

    const handleInputChange = (e) => {
      handleFiles(e.target.files);
    };

    return (
      <div>
        <div>
    <div
      id="drop-area"
      ref={dropAreaRef}
      onDragOver={handleDragOver}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="drop-area"
      onClick={() => fileInputRef.current.click()}
    >
      <img
        id="preview"
        className="preview-img"
        src={previewSrc || "/Assets/user.png"}
        alt="Profile"
      />
      <input
        type="file"
        name='image'
        ref={fileInputRef}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
    </div>
  </div>
      </div>
    );
  }

  export default ImageUploader;
