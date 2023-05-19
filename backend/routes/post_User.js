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

router.post('/register', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const fname = req.body.fname
    const lname = req.body.lname
    const password = req.body.password
    const email = req.body.email

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        const [data] = await pool.query("insert into user(frist_name, last_name, password, email) values (?, ?, ?, ?)",
        [fname, lname, password, email])

        const userId = data[0].insertId

        await pool.query(
            `insert into images(user_id, image_file_path) values(?, ?);`,
            [userId, file.path.substr(6).replaceAll("\\", "/")]
        )

        conn.commit()
        res.status(200).send('register success')
    }catch(err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('register error')
    }finally{
        conn.release()
        console.log('finally')
    }
})

router.post('/fav/:placeId/:userId', upload.single(), async(req, res) => {
    const place = req.params.placeId
    const user = req.params.userId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("insert into fav_place (place_id, user_id) values (?, ?)", [place, user])

    }catch(err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})

router.post('/bookVan/:userId', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const userId = req.params.userId
    const round = req.body.round_van_id

    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try{
        const [data] = await pool.query("insert into bookVan (user_id, round_van_id) values (?,?)", [userId, round])

        const bookId = data[0].insertId

        await pool.query(
            `insert into payment_img(book_id, image_file_path) values(?, ?);`,
            [bookId, file.path.substr(6).replaceAll("\\", "/")]
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

router.post('/review/:placeId/:userId', upload.single(), async(req, res) => {
    const placeId = req.params.placeId
    const userId = req.params.userId
    const review = req.body.review
    
    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("insert into reviews(review, place_id, user_id, like) values (?,?,?,0)",
        [review, placeId, userId])

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