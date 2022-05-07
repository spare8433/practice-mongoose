const mongoose = require('mongoose')

const DebatePost = require('../models/debatePost');
const Comment = require('../models/comment');
const Reply = require('../models/reply');

const selectDebatePost = () => {
  DebatePost.find().then(debatePost=>{
    console.log('3')
    return debatePost
  }).catch(err => {return err})
}

const selectOneDebatePost = () => {
  DebatePost.find().then(debatePost=>{
    return debatePost
  }).catch(err => {return err})
}

const createDebatePost = (req) => {
  try{
    console.log('2')
    const debatePost = new DebatePost({
      title: req.title,
      content: req.content,
      category: req.category,      
      method: req.method
    })
    return debatePost
  } catch(err) {
    console.log(err)
    return(err)
  }      
}

exports.selectDebatePost = selectDebatePost;
exports.selectOneDebatePost = selectOneDebatePost;
exports.createDebatePost = createDebatePost;