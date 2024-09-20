const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/instagram-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema for posts
const postSchema = new mongoose.Schema({
  filename: String,
  caption: String,
  likes: { type: Number, default: 0 },
  comments: [{ text: String, date: Date }],
});

const Post = mongoose.model('Post', postSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});
const upload = multer({ storage });

// Route to upload a photo
app.post('/upload', upload.single('photo'), async (req, res) => {
  const { caption } = req.body;
  const newPost = new Post({ filename: req.file.filename, caption });
  await newPost.save();
  res.json(newPost);
});



// Route to get all posts
app.get('/photos', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
