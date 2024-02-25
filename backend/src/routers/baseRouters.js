const express = require('express');
const { Router } = require('express');
const { upload } = require('../middleware/imageMiddleware');
const router = Router()

router.post("/post-request",upload.array("myImage",5) ,(req, res) => {
    const requestObject = req.body;
    console.log(requestObject);
    //SAVE THE REQUEST IN REQUEST TABLE
})

module.exports = router;