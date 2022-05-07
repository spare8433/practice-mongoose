const mongoose = require('mongoose')
const {Schema} = mongoose

const TestModel = new Schema(
  {
    name:{      
      type:String,
      default:'test'
    }
  }
) 

module.exports = mongoose.model('Testmodel',TestModel);