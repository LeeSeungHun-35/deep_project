//서버 기본

const express = require('express');  
const app = express();              
const PORT = 3001;                  

app.use(express.json());              

// GET부분ㄴ
app.get('/', (req, res) => {
    res.send('백엔드 node 테스트');     
});

// POST 요청 
app.post('/data', (req, res) => {
    console.log(req.body);           
    res.json({                      
        message: 'Data received',
        data: req.body
    });
}); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});