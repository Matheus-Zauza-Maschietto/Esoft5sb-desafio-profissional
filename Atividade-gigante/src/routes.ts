import { Router } from 'express'
import testController from './Controllers/testController'
import userController from './Controllers/userController'
import categoriaController from './Controllers/categoriaController'

const routes = Router()
routes.get("/health-check", testController.healthCheck)
routes.get("/users", userController.getUser)
routes.post("/users", userController.createUser)
routes.post("/users/login", userController.loginUser)

routes.post("/category", categoriaController.createCategoria)
routes.get("/category", categoriaController.getCategorias)
routes.get("/category/:id", categoriaController.getCategoriaById)
routes.put("/category/:id", categoriaController.updateCategoriaById)
routes.delete("/category/:id", categoriaController.deleteCategoriaById)
export {
    routes
} 