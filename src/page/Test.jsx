import React, { useState } from 'react';
import './Test.css';

const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {

      alert(`File uploaded: ${selectedFile.name}`);
    } else {
      alert('Please select a file first.');
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    document.getElementById('fileInput').value = ''; //파일 취소 시키는 부분
  };

  return (
    <div className="upload-container">
      <div className="card">
        <h1>딥페이크 판독 서비스</h1>
        <p>파일을 업로드하여 분석을 할 수 있습니다</p>
        <div className="upload-section">
          <input id="fileInput" type="file" onChange={handleFileChange} />
          <div className="button-group">
            <button onClick={handleUpload}>업로드</button>
            <button onClick={handleCancel} className="cancel-button">취소</button>
          </div>
        </div>
        {selectedFile && <p>내가 선택한 파일: {selectedFile.name}</p>}
      </div>
    </div>
  );
}

export default Test;
