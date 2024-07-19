const courses = require("../models/courses");

const createCourse = async (newCourse) => {
    const course = await courses.create(newCourse);
    return course;
};

const getAllCourses = async () => await courses.find();

const getCourseByID = async (id) => {
    const course = await courses.findById(id);
    return course;
};

const updateCourse = async (id, updatedCourse) => {
    const course = await courses.findByIdAndUpdate(id, updatedCourse, {
        new: true,
    });

    return course;
};

const updateCoursePartially = async (id, updatedValue) => {
    const course = await courses.findByIdAndUpdate(id, updatedValue, {
        new: true,
    });

    return course;
};

const deleteCourse = async (id) => {
    const course = await courses.findByIdAndDelete(id);
    return course;
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseByID,
    updateCourse,
    updateCoursePartially,
    deleteCourse,
};
