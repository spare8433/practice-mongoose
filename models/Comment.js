const mongoose = require('mongoose')
const {Schema} = mongoose

const comment = new Schema(
  {
    writer:{      
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
    },
    content:{
      type:mongoose.Mixed,
      required:true,
    },
    enrolled:{
      type:Date,
      default:Date.now
    },
    recNum:{
      type:Number,
      default:0
    },
    replyId:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reply' 
    }],
  }
) 

module.exports = mongoose.model('Comment',comment);