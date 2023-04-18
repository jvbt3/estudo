import { Router } from "express";
import UserController from "./../src/controller/user_controller";


const routes = Router();

routes.get('/usuario', UserController.getUser);
routes.post('/usuario', UserController.postUser);

export default routes;