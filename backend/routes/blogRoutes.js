const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  searchBlogs,
  filterBlogsByGenre,
  createNewBlog,
  updateBlog,
  likeBlog,
  increaseViews,
  addComment,
  deleteBlog
} = require("../controllers/blogControllers");

// ✅ GET all blogs
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ GET blog by ID
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await getBlogById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// ✅ Search blogs by title or content
router.get("/blogs/search/:query", async (req, res) => {
  try {
    const blogs = await searchBlogs(req.params.query);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Filter blogs by genre
router.get("/blogs/genre/:genre", async (req, res) => {
  try {
    const blogs = await filterBlogsByGenre(req.params.genre);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ POST a new blog
router.post("/blogs", async (req, res) => {
  try {
    const newBlog = await createNewBlog(req.body);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ PUT update a blog
router.put("/blogs/:id", async (req, res) => {
  try {
    const updatedBlog = await updateBlog(req.params.id, req.body);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ PATCH like a blog
router.patch("/blogs/:id/like", async (req, res) => {
  try {
    const updatedBlog = await likeBlog(req.params.id);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ PATCH increase blog views
router.patch("/blogs/:id/view", async (req, res) => {
  try {
    const updatedBlog = await increaseViews(req.params.id);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ POST add a comment to a blog
router.post("/blogs/:id/comment", async (req, res) => {
  try {
    const updatedBlog = await addComment(req.params.id, req.body.commentText);
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ DELETE blog
router.delete("/blogs/:id", async (req, res) => {
  try {
    await deleteBlog(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
