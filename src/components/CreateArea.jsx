import React, { useState } from "react";
import Note from "./Note.jsx";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea() {
  var [userTitle, CollectTitle] = useState("");
  function TitleSection(event) {
    const tit = event.target.value;
    CollectTitle(tit);
  }

  var [userContent, CollectContent] = useState("");
  function ContentSection(event) {
    var con = event.target.value;
    CollectContent(con);
  }

  var [Titleitems, AddTitleItem] = useState([]);
  function AddTitle() {
    AddTitleItem((prevValue) => {
      return [...prevValue, userTitle];
    });
    CollectTitle("");
  }

  var [Contentitems, AddContentItem] = useState([]);
  function AddContent() {
    AddContentItem((prevValue) => {
      return [...prevValue, userContent];
    });
    CollectContent("");
  }

  function AddButton(e) {
    e.preventDefault();
    AddTitle();
    AddContent();
  }

  function DeleteItem(id) {
    AddTitleItem((prevValue) => {
      return prevValue.filter((x, index) => {
        return index !== id;
      });
    });
    AddContentItem((prevValue) => {
      return prevValue.filter((x, index) => {
        return index !== id;
      });
    });
  }
  // var keys = ["foo", "bar", "baz"];
  // var values = [11, 22, 33];

  // var result = {};
  // Titleitems.forEach((key, i) => (result[key] = Contentitems[i]));
  // console.log(result);
  // var len = Object.keys(result).length;
  var [clicked, isClicked] = useState(false);
  function Clicked() {
    isClicked(true);
  }
  function renderConditionally() {
    if (clicked) {
      return (
        <form className="create-note">
          <input
            name="title"
            value={userTitle}
            placeholder="Title"
            onChange={TitleSection}
          />
          <textarea
            name="content"
            placeholder="Take a note...."
            rows="3"
            value={userContent}
            onChange={ContentSection}
          />
          <Zoom in={true}>
            <Fab onClick={AddButton}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      );
    }
  }
  function initialState() {
    if (clicked === false) {
      return (
        <form className="create-note">
          <textarea
            name="title"
            // value={userTitle}
            placeholder="Take a note..."
            onClick={Clicked}
            rows="1"
          />
        </form>
      );
    }
  }
  console.log(Titleitems);
  console.log(Contentitems);
  return (
    <div>
      {initialState()}
      <div>{renderConditionally()}</div>
      {Titleitems.map((item, index) => (
        <Note
          key={index}
          title={item}
          content={Contentitems[index]}
          id={index}
          DeleteClick={DeleteItem}
        />
      ))}
    </div>
  );
}

export default CreateArea;
