import { Router } from "express";
import { EventController } from "../controllers/eventController/index.js";

const router = Router();

router.post("/event/create", EventController.create.bind(EventController));

router.get("/event/listAll", EventController.listAll.bind(EventController));

router.post("/event/findEvent", EventController.find.bind(EventController));

router.put("/event/update/:id", EventController.update.bind(EventController));

router.delete(
  "/event/delete/:id",
  EventController.delete.bind(EventController)
);

export default router;
