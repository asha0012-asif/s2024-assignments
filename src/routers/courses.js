const { Router } = require("express");

const coursesController = require("../controllers/courses");
const isValidObjectId = require("../middleware/validateObjectID");

const coursesRouter = Router();

// C - Create
coursesRouter.post("/", coursesController.createCourse);

// R - Read all
coursesRouter.get("/", coursesController.getAllCourses);

// R - Read one
coursesRouter.get("/:id", isValidObjectId, coursesController.getCourseByID);

// U - Update (replace)
coursesRouter.put("/:id", isValidObjectId, coursesController.updateCourse);

// U - Update (partial)
coursesRouter.patch(
    "/:id",
    isValidObjectId,
    coursesController.updateCoursePartially
);

// D - Delete
coursesRouter.delete("/:id", isValidObjectId, coursesController.deleteCourse);

module.exports = coursesRouter;
