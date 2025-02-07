const express = require("express")
const router = express.Router()
const blogController = require("../controllers/blogController")

router.get("/blogs",blogController.getblogs);
router.post("/blogs",blogController.createBlog)

module.exports = router;