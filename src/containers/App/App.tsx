import Fight from "../Fight/Fight";
import "./App.css";

import * as React from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class App extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <Fight/>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
