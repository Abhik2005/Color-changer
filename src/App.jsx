import {useState} from "react";
import "./index.css"

function App() {
  var [color , setColor] = useState("gray")
  return (
    <>
      <div 
        className="w-full h-screen" 
        style={{ backgroundColor: color }}>
      <div className="flex justify-center bg-white rounded-xl absolute bottom-0">
        <div className="flex flex-wrap px-2 py-2 gap-[5.5px]">
          <button
            onClick={()=>setColor("red")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "red"}}>Red</button>
          <button
            onClick={()=>setColor("blue")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "blue"}}>Blue</button>
          <button
            onClick={()=>setColor("green")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "green"}}>Green</button>
          <button
            onClick={()=>setColor("yellow")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
            onClick={()=>setColor("black")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "black"}}>Black</button>
          <button
            onClick={()=>setColor("gray")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "gray"}}>Gray</button>

<button
            onClick={()=>setColor("violet")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "violet"}}>Voilet</button>
          <button
            onClick={()=>setColor("pink")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "pink"}}>Pink</button>
          <button
            onClick={()=>setColor("skyblue")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "skyblue"}}>Skyblue</button>
          <button
            onClick={()=>setColor("purple")}
            className="text-white px-3 py-2 rounded-full" style={{backgroundColor: "purple"}}>Purple</button>
        </div>
    </div>
      </div>
    </>
  );
}

export default App;
