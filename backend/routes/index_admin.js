const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer');

const router = express.Router();

router.get('/vin/profile/:vinId', async(req, res) => {
    const vinId = req.params.vinId
    try{
        const [data] = await pool.query(
            `select * from rider_info r 
            join images i 
            on(r.rider_info_id = i.rider_id) 
            where rider_info_id = ?`, [vinId])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/van/profile/:vanId', async(req, res) => {
    const vanId = req.params.vanId
    try{
        const [data] = await pool.query(
            `select * from van_info v 
            join images i 
            on(v.van_info_id = i.van_id) 
            where rider_info_id = ?`, [vanId])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/van/round', async(req, res) => {
    try{
        const [data] = await pool.query(`select * from round_van r join van_info v on(r.create_by = v.van_info_id)`)
        return res.json(data)
    }catch (err){
        console.log(err)
    }
})

router.get('/van/round/:location', async(req, res) => {
    const location = req.params.location
    try{
        const [data] = await pool.query(
            `select * from round_van r 
            join van_info v 
            on(r.create_by = v.van_info_id)
            where location = ?`, [location])
        return res.json(data)
    }catch (err){
        console.log(err)
    }
})

router.get('/van/round/:roundId', async(req, res) => {
    const roundId = req.params.roundId
    try{
        const [data] = await pool.query(
            `select * from book_van b
            join user u using(user_id)
            join payment_img p
            on(p.book_id = b.id)
            where round_van_id = ?`, [roundId])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

exports.router = router;