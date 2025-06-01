import express from 'express'
import {signup,login} from '../Controllers/authenticateUser.js'  // logout, checkAuth
// import protectRoute from '../Middleware/Protectroute.js'// for jwt token identification

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
// router.post("/logout", logout);  

// router.put("/update-profile", protectRoute, updateProfile);

// router.get("/check", protectRoute, checkAuth);

export default router;