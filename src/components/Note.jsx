import React from "react";
// import CreateArea from "./CreateArea";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.DeleteClick(props.id);
        }}
      >
        <DeleteForeverTwoToneIcon />
      </button>
    </div>
  );
}

export default Note;
