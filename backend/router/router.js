import { Router } from "express";

const router = Router()

router.get("/", (req, res)=>{
  res.status(200).json("Hi from my GitHub")
})
router.get("/health", (req, res)=>{
  res.status(200).json("It's OK")
})
export default router