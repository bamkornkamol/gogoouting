const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer');

router = express.Router();

router.get('/home', async(req, res) => {
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join images i on (s.id = i.place_id)"
        )

        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/sugplace/:category', async(req, res) => {
    const category = req.params.category
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join images i on (s.id = i.place_id) where category_id = ?",
            [category]
        )
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/place/detail/:placeId', async(req, res) => {
    const place_id = req.params.placeId
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join category c using(category_id) join images i on (s.id = i.place_id) where place_id = ?"
            ,[place_id]
        )

        const [review] = await pool.query(
            "select * from reviews where place_id = ?", [place_id]
        )
        return res.json({
            place_dt: data,
            review: review
        })
    }catch(err){
        console.log(err)
    }
})

router.get('/vin/:location', async(req, res) => {
    const location = req.params.location
    try{
        const [data] = await pool.query(
            `select * from rider_info r 
            join images i 
            on (r.rider_info_id = i.rider_id) 
            where rider_location = ?`, [location])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/vin/detail/:id', async(req, res) => {
    const vinId = req.params.id
    try{
        const [data] = await pool.query(
            `select * from rider_info r 
            join driver_all d
            using (rider_info_id)
            join images i 
            on (r.rider_info_id = i.rider_id) 
            where rider_info_id = ?`, [vinId])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/van/:location', async(req, res) => {
    const location = req.body.location
    try{
        const [data] = await pool.query(
            `select * from round_van r 
            join van_info v using(round_van_id) 
            join driver_all d on (v.van_info_id = d.van_info_id) 
            where location = ?`, [location])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})

router.get('/profile/:userId', async(req, res) => {
    const userId = req.body.userId

    try{
        const [data] = await pool.query("select * from user where user_id = ?", [userId])
        const [favplace] = await pool.query(
            "select * from fav_place f join suggestion_place s using(place_id) join images i on (s.place_id = i.place_id)"
        )

        return res.json({
            profile: data,
            favplace: favplace
        })
    }catch(err){
        console.log(err)
    }
})

router.get('/bookVan/:userId', async(req, res) => {
    const userId = req.params.userId

    try{
        const [data] = await pool.query("select * from bookVan join round_van using (round_van_id) where user_id = ?",
        {userId})
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})
exports.router = router;