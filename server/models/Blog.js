const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  postedBy: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

Blog.associate = function(models) {
  // We're saying that a Blog should belong to an Author
  // A Blog can't be created without an Author due to the foreign key constraint
  Blog.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};

return Blog;
