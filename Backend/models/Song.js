const mongoose = require('mongoose');

const LyricLineSchema = new mongoose.Schema({
  lineId: { type: Number, required: true }, 
  section: { type: String, default: "" },   
  original: { type: String, required: true },
  translation: { type: String, required: true },
  transliteration: { type: String, required: true }
}, { _id: false }); 

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  artist: { type: String, required: true },
  coverImageUrl: { type: String, default: "" }, 
  audioUrl: { type: String, default: "" },      
  lyrics: [LyricLineSchema]                     
}, { timestamps: true });

module.exports = mongoose.model('Song', SongSchema);