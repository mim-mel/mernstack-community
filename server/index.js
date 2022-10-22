const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });
const app = express();
const port = 5050;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require('./Model/Post.js');

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

app.post('/api/post/submit', (req, res) => {
  let temp = req.body;
  const CommunityPost = new Post(temp);
  CommunityPost.save()
    .then(() => {
      res.status(200).json({ success: true });
      console.log(temp);
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post('/api/post/list', (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
