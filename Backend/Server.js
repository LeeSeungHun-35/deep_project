

const express = require('express');  
const app = express();              
const PORT = 3001;                  

app.use(express.json());              

// GET 요청 처리
app.get('/', (req, res) => {
    res.send('백엔드 node 테스트');     
});

// POST 요청 처리
app.post('/data', (req, res) => {
    console.log(req.body);           
    res.json({                      
        message: 'Data received',
        data: req.body
    });
}); 

// 포트 지정
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});