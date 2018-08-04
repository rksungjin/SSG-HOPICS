const db = require("../models/Blog");

exports.index = function(req, res) {
	Blog
  .find({})
  // .where('UserId').equals(req.user.id)
  .then(function(dbBlog) {
    res.render('trips/trips', {
		  blog: dbBlog
	  });
  });
};

// const db = require("../models/Blog");

// Defining methods for the blogsController
module.exports = {
  // findAll: function(req, res) {
  //   db.Blog
  //     .find({})
  //     .sort({ date: 1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.Blog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Blog
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Blog
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Blog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
