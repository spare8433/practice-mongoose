const mongoose = require('mongoose')
const {Schema} = mongoose

const reply = new Schema(
  {    
    writer:{      
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
    },
    target:{      
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
    }
  }
) 

module.exports = mongoose.model('Reply',reply);