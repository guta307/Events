import { Router } from "express";
import { EventController } from "../controllers/eventController/index.js";
const router = Router();

router.post("/event/create", EventController.createEvent);

router.get("/event/listAll", EventController.listEvents);

export default router;