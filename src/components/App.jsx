import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // CreateArea.AddButton();

  return (
    <div>
      <Header />
      <CreateArea />
      {/* <Note key={1} title="Great me" content="Great You" /> */}
      <Footer />
    </div>
  );
}

export default App;
