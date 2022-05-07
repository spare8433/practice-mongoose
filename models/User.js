const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema(
  {    
    email:{
      type:String,
      required:true,    
    },
    name:{
      type:String,
      required:true
    },
    id:{
      type:String,
      lowercase:true,
      required:true
    },
    pw:{
      type:String,
      required:true
    },
    nickName:{
      type:String,
      required:true
    },
    level:{
      type:Number,
      default:0
    },
    point:{
      type:Number,
      default:0
    },
    enrolled:{
      type:Date,
      default:Date.now
    }
  },
  {
    // 시간정보를 기록하게 해줌
    timestamps: true
  }
);

module.exports = mongoose.model('User',userSchema)