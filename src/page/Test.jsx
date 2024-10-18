import React, { useState } from 'react';
import './Test.css';

const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    document.getElementById('fileInput').value = ''; // 파일 취소 시키는 부분
  };

  return (
    <div className="upload-container">
      <div className="card">
        <h1>딥페이크 판독 서비스</h1>
        <p>딥페이크 의심 파일을 첨부하여 분석을 해볼 수 있습니다</p>
        <div className="upload-section">
          <input id="fileInput" type="file" onChange={handleFileChange} /> <br/>
          <div className="button-group">
            <button onClick={() => alert(`파일 선택: ${selectedFile ? selectedFile.name : '없음'}`)}>파일 확인</button>
            <button onClick={handleCancel} className="cancel-button"> 업로드 취소</button>
          </div>
        </div>
        {selectedFile && <p>내가 선택한 파일: {selectedFile.name}</p>}
      </div>
    </div>
  );
}

export default Test;
