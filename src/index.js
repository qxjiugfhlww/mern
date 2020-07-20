// const mongoose = require('mongoose');

// const Person = mongoose.model('Person', {name: String});
// const man = new Person({name:'Name'});
// 

import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostController from './controllers/PostController';

// import PostModel from './models/Post';

const Post = new PostController();

const app = express();
mongoose.connect('mongodb://localhost/blog');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/posts', Post.index);
app.get('/posts/:id', Post.read);
app.post('/posts', Post.create);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(3333, () => {
  console.log('SERVER STARTED');
})

/////////////////////////////////////////////////////////////////////////
// app.get('/posts', (req, res) => {
//   return res.send(posts);
// });

// app.post('/posts', (req, res) => {
//   const data = req.body;

//   const post = new PostModel({
//     title: data.title,
//     text: data.text
//   });

//   post.save().then(() => {
//     res.send({ status: 'ok' })
//   });
// });

// app.get('/posts', (req, res) => {
//   PostModel.find().then((err, posts) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(posts);
//   });
// });

// app.delete('/posts/:id', (req, res) => {
//   PostModel.remove({
//     _id: req.params.id
//   }).then(post => {
//     if (post) {
//       res.json({ status: 'deleted' });
//     } else {
//       res.json({ status: 'error' });
//     }
//   });
// });

// app.put('/posts/:id', (req, res) => {
//   PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json({ status: 'updated' });
//   });
// });

// app.listen(3333, () => {
//   console.log('SERVER STARTED');
// })






/////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// const posts = [
//   {
//     title: 'title1',
//     text: 'text1text1text1'
//   },
//   {
//     title: 'title2',
//     text: 'text2text2text2'
//   },
// ];


// app.get('/posts', (req, res) => {
//   return res.send(posts);
// });

// app.get('/posts/:id', (req, res) => {
//   return res.send(posts[req.params.id]);
// });

// app.post('/posts', (req, res) => {
//   const data = req.body;
//   console.log(data);
//   posts.push(data);
//   return res.send(posts);
// })

// app.listen(3333, () => {
//   console.log('SERVER STARTED');
// });