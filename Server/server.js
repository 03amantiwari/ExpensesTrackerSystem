const express = require('express')
const app=express()
const cors = require('cors')
const expenseRouter = require('./routes/expenses')
const userRouter = require('./routes/users')

app.use(express.json())
app.use(cors())

app.use('/expense',expenseRouter)
app.use('/user',userRouter)


app.listen(4000,'localhost',()=>{
    console.log("Server is started and listening at prot no. 4000 ..........")
})