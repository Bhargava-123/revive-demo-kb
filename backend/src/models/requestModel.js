const mongoose = require("mognoose");

const Schema = mongoose.Schema;

const requestSchema = Schema({
    userId: {
        type: String,
    },
    title: {
        type: String,
    },
    data: {
        type: Date,
    },
    img: {
        type: [{
            data: Buffer,
            contentType: String
        }]
    },
    desc: {
        type: String,
    },
    tags: {
        type: [String]
    },
    qty: {
        type: String,
    }, adrs: {
        type: String,
    }, status: {
        type: String
    }
}, { timestamps: true })


const requestModel = mongoose.model("Request", requestSchema);

module.exports = requestModel;