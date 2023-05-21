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

//success
router.put('/profile/edit/:userId', upload.single(), async(req, res) =>{
    const userId = req.params.userId
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("update user set first_name=?, last_name=?, email=? where id = ?",
        [fname, lname, email, userId])

        conn.commit()
        res.status(200).send('success')
    }catch(err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})
//success
router.put('/profile/editimg/:userId', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const userId = req.params.userId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        await pool.query(
            `update images set image_file_path=? where user_id = ?;`,
            [file.path.substr(6).replaceAll("\\", "/"), userId]
        )

        conn.commit()
        res.status(200).send('success')
    }catch(err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})

router.put('/review/edit/:rwId', upload.single(), async(req, res) =>{
    const rwId = req.params.rwId
    const review = req.body.review

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("update reviews set review=? where id = ?",
        [review, rwId])

        conn.commit()
        res.status(200).send('success')
    }catch(err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})

router.put('/review/addLike/:rwId', async(req, res) => {
    const rwId = req.params.rwId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("select * from reviews where id = ?", [rwId])

        await pool.query("update reviews set like = ? where id = ?",
        [data[0].like+1, rwId])

        conn.commit()
        res.status(200).send('success')
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