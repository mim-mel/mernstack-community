const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 5050;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log('Connecting MongoDB...');
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//첫번째 인자는 URL
//req는 클라이언트가 서버에 보내는 요청, res는 서버가 클라이언트에 보내는 응답이다.

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//유저가 어떤 URL로 들어오든 동일하게 index.html파일을 띄워준다. URL에 따른 화면의 전환은 클라이언트측에서 react router가 조정한다.
//body-parsor

app.post('/api/test', (req, res) => {
  console.log(req.body);
  res.status(200).json({ sucess: true, text: '안녕하세요' });
});
