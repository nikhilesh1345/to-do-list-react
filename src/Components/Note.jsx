import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nikhilesh1345/to-do-list-react.git
// git push -u origin main
