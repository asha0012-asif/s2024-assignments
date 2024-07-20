const coursesService = require("../services/courses");

const createCourse = async (req, res, next) => {
    try {
        const newCourse = await coursesService.createCourse(req.body);

        res.status(201).json({
            data: newCourse,
        });
    } catch (err) {
        next(err);
    }
};

const getAllCourses = async (_req, res, next) => {
    try {
        const courses = await coursesService.getAllCourses();

        res.status(200).json({
            data: courses,
        });
    } catch (err) {
        next(err);
    }
};

const getCourseByID = async (req, res, next) => {
    try {
        const { id } = req.params;
        const course = await coursesService.getCourseByID(id);

        res.status(200).json({
            data: course,
        });
    } catch (err) {
        next(err);
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCourse = await coursesService.updateCourse(id, req.body);

        res.status(200).json({
            data: updatedCourse,
        });
    } catch (err) {
        next(err);
    }
};

const updateCoursePartially = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCourse = await coursesService.updateCoursePartially(
            id,
            req.body
        );

        res.status(200).json({
            data: updatedCourse,
        });
    } catch (err) {
        next(err);
    }
};

const deleteCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCourse = await coursesService.deleteCourse(id);

        res.status(200).json({
            data: deletedCourse,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseByID,
    updateCourse,
    updateCoursePartially,
    deleteCourse,
};
