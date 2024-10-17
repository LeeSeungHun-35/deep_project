import React, { useState } from 'react';
import axios from 'axios';
import './Test.css';

const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setResult(response.data.result); // 백엔드에서 반환한 결과를 상태에 저장
        alert(`File uploaded: ${selectedFile.name}`);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('파일 업로드에 실패했습니다.');
      }
    } else {
      alert('Please select a file first.');
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setResult('');
    document.getElementById('fileInput').value = ''; //파일 취소 시키는 부분
  };

  return (
    <div className="upload-container">
      <div className="card">
        <h1>딥페이크 판독 서비스</h1>
        <p>딥페이크 의심 파일을 첨부하여 분석을 해볼 수 있습니다</p>
        <div className="upload-section">
          <input id="fileInput" type="file" onChange={handleFileChange} /> <br/>
          <div className="button-group">
            <button onClick={handleUpload}>업로드</button> | 
            | <button onClick={handleCancel} className="cancel-button"> 업로드 취소</button>
          </div>
        </div>
        {selectedFile && <p>내가 선택한 파일: {selectedFile.name}</p>}
        {result && <p>분석 결과: {result}</p>}
      </div>
    </div>
  );
}

export default Test;
