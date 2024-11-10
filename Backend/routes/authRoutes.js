const express=require("express");
const authController=require("../controller/authController");
const authMiddleware=require("../middleware/authMiddleware");

const router=express.Router();

router.post("/signup", authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/protected', authMiddleware.protect, (req, res) => {
    res.json({ success: true, message: 'This is a protected route', user: req.user });
});
module.exports=router;

