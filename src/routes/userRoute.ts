import { Router } from "express";
import { UserController } from "../controllers/userController/index.js";
const router = Router();

router.get("/user/listAll", UserController.listUsers);

router.get("/user/listAdmins", UserController.listAdmins);

router.get("/user/listClients", UserController.listClients);

router.post("/user/create", UserController.createUser);

router.put("/user/update/:id", UserController.updateUser);

export default router;
