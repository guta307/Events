import { Router } from "express";
import { EventController } from "../controllers/eventController/index.js";
const router = Router();

router.post("/event/create", EventController.createEvent);

export default router;
