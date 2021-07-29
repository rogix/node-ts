import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpadateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

const upload = multer({ dest: "./avatar" });

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpadateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  updateUserAvatarController.handle
);

export { usersRoutes };
