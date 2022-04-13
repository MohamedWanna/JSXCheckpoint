import React from "react";
import "./style.css";
import "./App.css";
import mountain from "./images/mountain.jpeg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 100px black", maxwidth: "100vw" }}>
        <h1 className="title red">Mohamed Wanna</h1>
        
        <h2 style={{textAlign:'left', textIndent:'10%'}} className="subtitle">Images</h2>
        <img src={mountain} alt="mountain meet sea" width="1000px" height="800px"/>
        <img src={"/nature/freysteinngjonssonFQTPqLb3CAunsplash.jpg"} alt="nature" width="1000px" height="800px"/>
      </div>
      <div>
      <h2 style={{textAlign:'left', textIndent:'10%'}} className="subtitle">Videos</h2>
      <video width="750" height="500" controls>
        <source src="/Videos/A_large_rock_waterfall.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
}
export default App;
