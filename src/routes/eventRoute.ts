import { Router } from "express";
import { EventController } from "../controllers/eventController/index.js";
const router = Router();

router.post("/event/create", EventController.createEvent);

router.get("/event/listAll", EventController.listEvents);

router.post("/event/findEvent", EventController.findEvent);

router.put("/event/update/:id", EventController.updateEvent);

export default router;
