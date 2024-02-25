const express = require('express');
const { Router } = require('express');
const cors = require('cors');
const fs = require('fs');
const { upload } = require('../middleware/imageMiddleware');
const router = Router()
router.use(cors());
router.post("/post-request", upload.array("image"),(req, res) => {
    // console.log(req.body[image]);
    // console.log(req.body['image']);
    const imageArray = [];
    req.body['image'].map((value) => {
        const decodedFile = new Buffer.from(value, 'base64')
        imageArray.push(decodedFile);
    })
    console.log(imageArray);
    // const decodedFile = new Buffer.from(req.body['myImage'], 'base64');
    // console.log(decodedFile);
    console.log("REQUEST ADDED.....");
    //SAVE THE REQUEST IN REQUEST TABLE
})

module.exports = router;