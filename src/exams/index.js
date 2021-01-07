const express = require("express");
const { readExam, writeExam } = require("../lib/utilities");

const Router = express.Router();

Router.post("/start", async (req, res) => {
  try {
    const examsDB = await readExam();
    examsDB.push({
      ...req.body,
      _id: uniqid(),
      examDate: new Date(),
      isCompleted: false,
      totalDuration: 30,
      questions: [],
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = Router;
