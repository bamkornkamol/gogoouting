const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer');

router = express.Router();

// multer =================================================================================
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './static/uploads') // path to save file
    },
    filename: function (req, file, callback) {
        // set file name
        callback(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
// multer ================================================================================= 

router.put('/editProfile/:userId', upload.single(), async(req, res) =>{
    const userId = req.params.userId

    
})

exports.router = router;