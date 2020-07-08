let mongoose = require('mongoose')

let storySchema = new mongoose.Schema({
  name : { type: String ,  required: true}
})

module.exports = mongoose.model('Storys', storySchema)
