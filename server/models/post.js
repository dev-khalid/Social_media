import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: String,
  banner: String, 
  bgImage: String, 
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Posts = mongoose.model('Posts', postSchema);
export default Posts;
