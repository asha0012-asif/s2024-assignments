const courses = require("../models/courses");
const { NotFoundError, BadRequestError } = require("../utils/errors");

const validateCourseID = (id, course) => {
    if (!course)
        throw new NotFoundError(`No courses found with an id of ${id}`);

    return course;
};

const createCourse = async (newCourse) => {
    try {
        const course = await courses.create(newCourse);

        if (!course) throw new BadRequestError("Enter valid course details");

        return course;
    } catch (error) {
        throw error;
    }
};

const getAllCourses = async () => await courses.find();

const getCourseByID = async (id) => {
    try {
        const course = await courses.findById(id);
        return validateCourseID(id, course);
    } catch (error) {
        throw error;
    }
};

const updateCourse = async (id, updatedCourse) => {
    try {
        if (!updatedCourse.name || !updatedCourse.holes)
            throw new BadRequestError(
                "Cannot update course without name or holes"
            );

        const course = await courses.findByIdAndUpdate(id, updatedCourse, {
            new: true,
        });

        return validateCourseID(id, course);
    } catch (error) {
        throw error;
    }
};

const updateCoursePartially = async (id, updatedValue) => {
    try {
        const course = await courses.findByIdAndUpdate(id, updatedValue, {
            new: true,
        });

        return validateCourseID(id, course);
    } catch (error) {
        throw error;
    }
};

const deleteCourse = async (id) => {
    try {
        const course = await courses.findByIdAndDelete(id);
        return validateCourseID(id, course);
    } catch (error) {
        throw error;
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
