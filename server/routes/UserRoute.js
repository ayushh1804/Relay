
const { register, getAllUsers } = require("../controllers/UserController")
const {login} = require("../controllers/UserController")
const {setAvatar} = require("../controllers/UserController")


const router = require("express").Router();

router.post("/register", register )
router.post("/login", login)
router.post("/setavatar/:id", setAvatar);
router.get('/allUsers/:id', getAllUsers)

module.exports = router;