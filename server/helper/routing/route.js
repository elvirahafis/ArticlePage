import { Router } from "express";
import User from "../../controller/User.js";
const router = Router();

router.get("/home", User.cekToken, User.listhome);
router.post("/login", User.loginuser);
router.post("/register", User.createuser);
router.post("/createposting", User.createposting);
router.get("/about", User.about);
export default router;
