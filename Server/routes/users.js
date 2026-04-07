const express = require('express')
const router = express.Router()
const pool = require('./../db/pool')

router.get('/',async (req,res)=>{
    const sql='SELECT * FROM users'
    try {
        const data =await pool.query(sql)
        console.log(data)
        res.send(data[0])
        
    } catch (error) {
        res.send(error)
    }
})

router.post('/register',async (req,res)=>{
    const {full_name,email,password} =req.body
    const sql = 'INSERT INTO users(full_name,email,password) VALUES (?,?,?)'
    try{
        const data = pool.query(sql,[full_name,email,password])
        console.log(data)
        res.send("Register done")
    }
    catch(error){
        res.send(error)
    }
})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body
    const sql ='SELECT full_name ,email,password from users WHERE email=?'
    try {
        const data =await pool.query(sql,[email])
        const [user]=data
        if(user.length!=0){
            console.log(user)
        }else{
            res.send('Invalid Email')
        }
        res.send("done login")
    } catch (error) {
        res.send(error)
    }
})



module.exports = router 