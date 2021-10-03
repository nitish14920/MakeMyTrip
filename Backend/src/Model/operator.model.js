const { model,Schema } = require('mongoose')

const operatorSchema = new Schema({
  name_operator:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = model('operator',operatorSchema)