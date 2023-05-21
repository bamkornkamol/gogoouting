const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer');

router = express.Router();
//success
router.get('/home', async(req, res) => {
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join images i on (s.id = i.place_id) join category c on (s.category_id = c.id)"
        )

        return res.json(data)
    }catch(err){
        console.log(err)
    }
})
//success
router.get('/sugplace/:category', async(req, res) => {
    const category = req.params.category
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join images i on (s.id = i.place_id) join category c on (s.category_id = c.id) where category_id = ?",
            [category]
        )
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})
//success
router.get('/place/detail/:placeId', async(req, res) => {
    const place_id = req.params.placeId
    try {
        const [data] = await pool.query(
            "select * from suggestion_place s join category c on(c.id = s.category_id) join images i on (s.id = i.place_id) where place_id = ?"
            ,[place_id]
        )

        const [review] = await pool.query(
            "select *, r.id 'id' from reviews r join user u on(u.id = r.user_id) join images i on(u.id = i.user_id) where r.place_id = ?", [place_id]
        )
        return res.json({
            place_dt: data,
            review: review
        })
    }catch(err){
        console.log(err)
    }
})
//success
router.get('/vin/:location', async(req, res) => {
    const location = req.params.location
    try{
        const [data] = await pool.query(
            `select * from rider_info r 
            join images i 
            on (r.rider_info_id = i.rider_id) 
            where r.location = ?`, [location])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})
//success
router.get('/vin/detail/:id', async(req, res) => {
    const vinId = req.params.id
    try{
        const [data] = await pool.query(
            `select * from rider_info r 
            join rider_info d
            using (rider_info_id)
            join images i 
            on (r.rider_info_id = i.rider_id) 
            where rider_info_id = ?`, [vinId])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})
//success
router.get('/van/:location', async(req, res) => {
    const location = req.params.location
    try{
        const [data] = await pool.query(
            `select * from round_van r 
            join van_info v on(r.create_by = v.van_info_id) 
            where location = ?`, [location])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})  
//success
router.get('/profile/:userId', async(req, res) => {
    const userId = req.params.userId

    try{
        const [data] = await pool.query("select * from user u join images i on(u.id = i.user_id) where u.id = ?", [userId])
        const [favplace] = await pool.query(
            "select *, f.id 'fav_id' from fav_place f join suggestion_place s on(f.place_id = s.id) join category c on(s.category_id = c.id) join images i on (s.id = i.place_id) where f.user_id = ?",
            [userId]
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
        const [data] = await pool.query("select *,DATE_FORMAT(`date`, '%Y-%m-%d') AS `date` from book_van join round_van using (round_van_id) where user_id = ?",
        [userId])
        return res.json(data)
    }catch(err){
        console.log(err)
    }
})
exports.router = router;