import express from 'express'
const app = express()
const PORT = process.env.PORT || 7000
app.use(express.json())
app.use('/', (req, res)=>{
  res.json("Hello from Effective Mobile!")
})

app.listen(PORT, ()=>{
  console.log(`The Server started on a ${PORT} port`)
})