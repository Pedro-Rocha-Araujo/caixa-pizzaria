import { Router } from "express"
import {
  getPratos,
  getPrato,
  postPrato,
  putPrato,
  deletePrato
} from "./controllers/pratosController.js"

const router = Router()

// Rotas relacionadas aos pratos
router.get("/pratos", getPratos)
router.get("/prato/:id", getPrato)
router.post("/post-prato", postPrato)
router.put("/put-prato/:id", putPrato)
router.delete("/delete-prato/:id", deletePrato)

export default router