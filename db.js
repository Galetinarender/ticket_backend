const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://narendrabhupathi1296:narendra%40123@cluster0.oyt3l.mongodb.net/notes_data"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;
