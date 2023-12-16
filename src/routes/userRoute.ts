import { Router } from "express";
import { UserController } from "../controllers/userController/index.js";
const router = Router();

router.post("/user/findUser", UserController.find.bind(UserController));

router.get("/user/listAll", UserController.listAll.bind(UserController));

router.get("/user/listAdmins", UserController.listAdmins);

router.get("/user/listClients", UserController.listClients);

router.post("/user/create", UserController.create.bind(UserController));

router.put("/user/update/:id", UserController.update.bind(UserController));

router.delete("/user/delete/:id", UserController.delete.bind(UserController));

export default router;
