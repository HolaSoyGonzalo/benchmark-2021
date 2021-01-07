const { readJson, writeJson } = require("fs-extra");
const { join } = require("path");

const examPath = join(__dirname, "../exam/exam.json");

const readDB = async (filepath) => {
  try {
    const fileJson = await readJson(filepath);
    return fileJson;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const writeDB = async (filepath, data) => {
  try {
    await writeJson(filepath, data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  readExam: async () => readDB(examPath),
  writeExam: async (data) => writeDB(examPath, data),
};
