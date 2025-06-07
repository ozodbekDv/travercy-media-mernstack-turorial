const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// access   Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({
    message: goals,
  });
});

// @desc    Set goal
// @route   POST /api/goals
// access   Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Please add text field" });
    throw new Error("Please add text field");
  }

  res.status(200).json({
    message: "Set goal",
  });
});

// @desc    Update goal
// @route   Put /api/goals
// access   Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
});

// @desc    Delete goals
// @route   Delete /api/goals
// access   Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Get goals`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
