const { Router } = require("express");

const coursesController = require("../controllers/courses");

const coursesRouter = Router();

// C - Create
coursesRouter.post("/", coursesController.createCourse);

// R - Read all
coursesRouter.get("/", coursesController.getAllCourses);

// R - Read one
coursesRouter.get("/:id", coursesController.getCourseByID);

// U - Update (replace)
coursesRouter.put("/:id", coursesController.updateCourse);

// U - Update (partial)
coursesRouter.patch("/:id", coursesController.updateCoursePartially);

// D - Delete
coursesRouter.delete("/:id", coursesController.deleteCourse);

module.exports = coursesRouter;
