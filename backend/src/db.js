const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/revivekbdemo");
        console.log('Connected To DB..');
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { connectDB };