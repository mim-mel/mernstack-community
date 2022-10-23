const { mongoose } = require('mongoose');

// 모델에 어떤 데이터들이 들어갈지 정의해주는 작업
const PostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
  },
  { collection: 'Posts' }
);

const Post = mongoose.model('Posts', PostSchema);

module.exports = { Post };
