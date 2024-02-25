const express = require('express');
const { Router } = require('express');
const cors = require('cors');
const { upload } = require('../middleware/imageMiddleware');
const router = Router()
router.use(cors());
router.post("/post-request", upload.single("myImage"),(req, res) => {
    console.log(req.body['myImage']);
    const decodedFile = new Buffer.from(req.body['myImage'], 'base64');
    console.log(decodedFile);
    console.log("REQUEST ADDED.....");
    //SAVE THE REQUEST IN REQUEST TABLE
})

module.exports = router;