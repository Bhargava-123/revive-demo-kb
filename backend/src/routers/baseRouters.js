const express = require('express');
const { Router } = require('express');
const cors = require('cors');
const { upload } = require('../middleware/imageMiddleware');
const router = Router()
router.use(cors());
router.post("/post-request", upload.any(),(req, res) => {
    console.log(req.body);
    console.log("REQUEST ADDED.....");
    //SAVE THE REQUEST IN REQUEST TABLE
})

module.exports = router;