import React from "react";
import "./EditBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const EditBtn = props => (
  <button type="button" className="btn btn-link edit-btn">
    Edit
  </button>
);

export default EditBtn;
