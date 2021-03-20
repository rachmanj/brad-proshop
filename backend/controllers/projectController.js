import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';

// @desc    Fetch all project
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});

  if (projects) {
    res.json(projects);
  } else {
    res.status(404);
    throw new Error('Projects not found');
  }
});

export { getProjects };
