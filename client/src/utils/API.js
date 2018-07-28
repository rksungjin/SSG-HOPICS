import axios from "axios";

export default {
  // Gets all generalissues
  getGeneralIssues: function() {
    return axios.get("/api/generalissues");
  },
  // Gets the book with the given id
  getGeneralIssue: function(id) {
    return axios.get("/api/generalissues/" + id);
  },
  // Deletes the book with the given id
  deleteGeneralIssue: function(id) {
    return axios.delete("/api/generalissues/" + id);
  },
  // Saves a book to the database
  saveGeneralIssue: function(generalissueData) {
    return axios.post("/api/generalissues", generalissueData);
  }
};
