const express = require('express')
const router = express.Router()
const pool = require('./../db/pool')

router.get('/',async (req,res)=>{
    const sql='SELECT * FROM expenses'
    try {
        const data =await pool.query(sql)
        console.log(data)
        res.send(data[0])
        
    } catch (error) {
        res.send(error)
    }
})

router.post('/:user_id/addexpense',async (req,res)=>{
    const {amount,category,description,Date} =req.body
    const uid=req.params.user_id;
    console.log(uid ,amount,category,description,Date)
    const sql = 'INSERT INTO expenses(user_id,amount,category,description,expense_data) VALUES (?,?,?,?,?)'
    try{
        const data =await pool.query(sql,[uid,amount,category,description,Date])
        console.log(data)
        const [res1]=data
        res.send(res1)
    }
    catch(error){
        res.send(error)
    }
})

router.put('/updateexpense',async (req,res)=>{
    const {eid,amount,category,description,date} = req.body
    const sql = 'UPDATE expenses SET amount=? ,category=?,description = ?,expense_data=? WHERE expense_id=?'
    try {
        const data = pool.query(sql,[amount,category,description,date,eid])
        console.log(data)
        res.send("update Done")
    } catch (error) {
        res.send(error)
    }
})


module.exports = router 