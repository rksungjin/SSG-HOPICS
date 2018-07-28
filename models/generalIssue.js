const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalIssueSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const GeneralIssue = mongoose.model("GeneralIssue", generalIssueSchema);

module.exports = GeneralIssue;
