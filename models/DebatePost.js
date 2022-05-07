const mongoose = require('mongoose')
const {Schema} = mongoose

const debatePost = new Schema(
  {
    title:{      
      type:String,
      required:true
    },
    content:{
      type:mongoose.Mixed,
      required:true
    },
    enrolled:{
      type:Date,
      default:Date.now
    },
    category:String,
    writer:{      
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',      
    },
    hits:{
      type:Number,
      default:0
    },
    method:String,
    recNum:{
      type:Number,
      default:0
    },
    commentId:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment' 
    }],
  }
) 

module.exports = mongoose.model('DebatePost',debatePost);