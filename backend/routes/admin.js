const express = require("express");
const path = require("path")
const pool = require("../config");
const multer = require('multer');

const router = express.Router();

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
router.post('/register/vin', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const fname = req.body.fname
    const lname = req.body.lname
    const sex = req.body.sex
    const phone = req.body.phone
    const location = req.body.location
    const model = req.body.model
    const bike_id = req.body.bike_id
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query(
            `insert into rider_info (fname, lname, sex, phone, location, model, bike_id, status, password)
            values (?, ?, ?, ?, ?, ?, ?, '0', ?)`,
            [fname, lname, sex, phone, location, model, bike_id, password])

        const riderId = data.insertId

        const [data2] = await pool.query("insert into images (rider_id, image_file_path) values (?, ?)",
        [riderId, file.path.substr(6).replaceAll("\\", "/")])

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
router.post('/login/vin', upload.single(), async(req, res) => {
    const phone =  req.body.phone
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()
    console.log(password, phone)

    try{
        const [data] = await pool.query("select * from rider_info where phone = ? and password = ?",[phone, password])
        if(data.length == 0){
            return res.json('เบอร์โทรศัพท์หรือรหัสผ่านไม่ถูกต้อง')
        }
        res.json(data)
    }catch(err){
        await conn.rollback()
        console.log(err)
    }finally{
        conn.release()
    }
})
//success
router.post('/register/van', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const fname = req.body.fname
    const lname = req.body.lname
    const sex = req.body.sex
    const phone = req.body.phone
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query(
            `insert into van_info (fname, lname, sex, phone, password)
            values (?, ?, ?, ?, ?)`,
            [fname, lname, sex, phone, password])

        const vanId = data.insertId

        const [data2] = await pool.query("insert into images (van_id, image_file_path) values (?, ?)",
        [vanId, file.path.substr(6).replaceAll("\\", "/")])

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
router.post('/login/van', upload.single(), async(req, res) => {
    const phone =  req.body.phone
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()
    console.log(password, phone)

    try{
        const [data] = await pool.query("select * from van_info where phone = ? and password = ?",[phone, password])
        if(data.length == 0){
            return res.json('เบอร์โทรศัพท์หรือรหัสผ่านไม่ถูกต้อง')
        }
        res.json(data)
    }catch(err){
        await conn.rollback()
        console.log(err)
    }finally{
        conn.release()
    }
})

router.put('/edit/profile/vin/:vinId', upload.single(), async(req, res) => {
    const vinId = req.params.vinId

    const fname = req.body.fname
    const lname = req.body.lname
    const sex = req.body.sex
    const phone = req.body.phone
    const location = req.body.location
    const model = req.body.model
    const bike_id = req.body.bike_id

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query(
            `update rider_info set fname = ?, lname = ?, sex = ?, phone = ?, location = ?, model = ?, bike_id = ? 
            where rider_info_id = ?`,
            [fname, lname, sex, phone, location, model, bike_id, vinId])

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

router.put('/edit/imgprofile/vin/:vinId', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const vinId = req.params.vinId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        await pool.query(
            `update images set image_file_path=? where rider_id = ?;`,
            [file.path.substr(6).replaceAll("\\", "/"), vinId]
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

router.put('/edit/profile/van/:vanId', upload.single(), async(req, res) => {
    const vanId = req.params.vanId

    const fname = req.body.fname
    const lname = req.body.lname
    const sex = req.body.sex
    const phone = req.body.phone

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query(
            `update van_info set fname = ?, lname = ?, sex = ?, phone = ? 
            where van_info_id = ?`,
            [fname, lname, sex, phone, vanId])

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

router.put('/edit/imgprofile/van/:vanId', upload.single('img'), async(req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file");
        // alert("Please upload file");
        error.httpStatusCode = 400;
        return res.json(error)
    }

    const vanId = req.params.vanId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        await pool.query(
            `update images set image_file_path=? where van_id = ?;`,
            [file.path.substr(6).replaceAll("\\", "/"), vanId]
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
//success
router.put('/setvin/:vinId', async(req, res) => {
    const vinId = req.params.vinId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("select status from rider_info where rider_info_id = ?",[vinId])
        console.log(data[0].status)
        await pool.query("update rider_info set status=? where rider_info_id = ?",[data[0].status == 0 ? '1':'0', vinId])

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
router.post('/setround/:vanId', upload.single(), async(req, res) => {
    const vanId = req.params.vanId

    const location = req.body.location
    const time = req.body.time
    const price = req.body.price
    const seat = req.body.seat
    const van_id = req.body.van_id

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("insert into round_van(location, price, seat, date, time, van_id, create_by, create_time) values (?,?,?,CURRENT_TIMESTAMP,?,?,?, CURRENT_TIMESTAMP)",
        [location, price, seat, time, van_id, vanId])

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
router.put('/round/edit/:roundId', upload.single(), async(req, res) => {
    const roundId = req.params.roundId

    const location = req.body.location
    const time = req.body.time
    const date = req.body.date
    const price = req.body.price
    const seat = req.body.seat

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try{
        const [data] = await pool.query("update round_van set location = ?, price = ?, seat = ?, date = ?, time = ? where round_van_id = ?",
        [location, price, seat, date, time, roundId])

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

router.delete('/round/delete/:roundId', async(req, res) => {
    const roundId = req.params.roundId

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        const [data] = await pool.query("delete from round_van where round_van_id = ?", [roundId])

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
