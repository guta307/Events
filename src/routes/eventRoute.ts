import { Router } from "express";
import { EventController } from "../controllers/eventController/index.js";
const router = Router();

router.post("/event/create", EventController.create);

router.get("/event/listAll", EventController.listAll);

router.post("/event/findEvent", EventController.find);

router.put("/event/update/:id", EventController.update);

router.delete("/event/delete/:id", EventController.delete);

export default router;
