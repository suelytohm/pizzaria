import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserControllers";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

export { router };
