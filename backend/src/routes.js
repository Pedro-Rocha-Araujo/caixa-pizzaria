import { Router } from "express"
import {
  getPratos,
  getPrato
} from "./controllers/pratosController.js"

const router = Router()

// Rotas relacionadas aos pratos
router.get("/pratos", getPratos)
router.get("/prato/:id", getPrato)

export default router