import './App.css';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import React from "react"
import Draggable from 'react-draggable';
function App() {

  return (
    <div className="App" >
      <div className="tryEdge">
        Try Out The NEW EDGE!
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Internet_Explorer_10%2B11_computer_icon.png" alt=""></img>
      </div>
      <MenuBar />
      <Dock />
      <div>
        <Draggable>
          <img className="information" src="https://forums.lenovo.com/old_attach/155135iE5014DCE72078883.png" alt=""></img>
        </Draggable>
        <Draggable>
          <img className="information" src="https://www.isumsoft.com/it/wp-content/uploads/2017/01/open-mouse-properties.png" alt=""></img>
        </Draggable>
      </div>

      <Draggable handle=".handle" resizable="true">
        <div>
          <div className="handle" >



          </div>
          <div className="mainContentFinder">
            <div>
              <img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>
              Pictures
            </div>
            <div>
              <img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>
              Documents
            </div>
            <div><img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>Downloads</div>
            <div><img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>Movies</div>
            <div><img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>Library</div>
            <div><img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>Music</div>
            <div><img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>Public</div>
            <div><img src="https://winaero.com/blog/wp-content/uploads/2018/11/folder-icon-big-256.png" alt=""></img>Desk</div>
          </div>
          <div className="sideBar"></div>
          <div className="handler">

          </div>
        </div>

      </Draggable>
    </div>
  );
}

export default App;
