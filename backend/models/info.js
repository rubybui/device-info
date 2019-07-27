const mongoose = require('mongooose');

const infoSchema = mongoose.Schema({
  ID: {type: String, required: true},
  name: {type: String, required: true},
  Description: { type: String, required: true},
  PDFs: {type: String, required: true}
});

module.exports = mongoose.model('Device',infoSchema);
