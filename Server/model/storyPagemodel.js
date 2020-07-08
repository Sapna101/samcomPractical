let mongoose = require('mongoose')

let storyPageSchema = new mongoose.Schema({
  storyId : { type : String , required : true},
  storyPagename : { type: String ,  required: true},
  page : { type : String , required : true}
})

module.exports = mongoose.model('Storypages', storyPageSchema)
