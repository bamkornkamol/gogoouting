const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer')

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

router.post('/favplace/:userId', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const userId = req.params.userId
    const p_name = req.body.place_name
    const location = req.body.location
    const category = req.body.category

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("insert into suggestion_place(place_name, place_location, category_id, user_id) values (?,?,?,?)",
        [p_name, location, category, userId])

        const place_id = data[0].insertId

        await pool.query(
            `insert into images(place_id, image_file_path) values(?, ?);`,
            [place_id, file.path.substr(6).replaceAll("\\", "/")]
        )

        conn.commit()
        res.status(200).send('register success')
    }catch(err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})

exports.router = router;