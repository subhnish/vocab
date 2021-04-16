const mongoose = require("mongoose")

mongoose.models = {}
let vocabModel = mongoose.model("vocabDb", mongoose.Schema({
  wordId: String,
  results: Object,
  word: String
}))

module.exports = vocabModel