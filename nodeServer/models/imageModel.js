const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    OriginalURL : String,
    Display : String,
    ImageID: String
});

const ImageNote = mongoose.model("ImageNote", imageSchema);

module.exports = ImageNote;