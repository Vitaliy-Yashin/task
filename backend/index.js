import express from 'express'
const app = express()
const PORT = process.env.PORT || 5000
import router from './router/router.js'
app.use(express.json())
app.use('/', router)

app.listen(PORT, ()=>{
  console.log(`The Server started on a ${PORT} port`)
})