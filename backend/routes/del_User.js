const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer')

router = express.Router();
//success
router.delete('/unfav/:favId', async(req, res) => {
    const favId = req.params.favId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        const [data] = await pool.query("delete from fav_place where id = ?", [favId])

        conn.commit()
        res.status(200).send('success')
    }catch (err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})
//success
router.delete('/review/delete/:rwId', async(req, res) => {
    const rwId = req.params.rwId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        const [data] = await pool.query("delete from reviews where id = ?", [rwId])

        conn.commit()
        res.status(200).send('success')
    }catch (err){
        await conn.rollback()
        console.log(err)
        return res.status(404).send('error')
    }finally{
        conn.release()
        console.log('finally')
    }
})

exports.router = router;