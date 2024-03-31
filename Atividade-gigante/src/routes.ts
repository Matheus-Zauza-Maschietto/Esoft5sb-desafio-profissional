import { Router } from 'express'
import testController from './Controllers/testController'
import userController from './Controllers/userController'
import categoriaController from './Controllers/categoriaController'
import statusController from './Controllers/statusController'

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

routes.post("/status/", statusController.createStatus)
routes.get("/status/", statusController.getStatus)
routes.get("/status/:id", statusController.getStatusById)
routes.put("/status/:id", statusController.UpdateStatusById)
routes.delete("/status/:id", statusController.deleteStatusById)
export {
    routes
} 