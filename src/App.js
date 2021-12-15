import { useState } from 'react';
import './App.css';
function App() {
  const [doThing,setDoThing]=useState("");
  const [doList,setDoList]=useState([]);
  const [doCheck,setDoCheck]=useState(false);
  const onclick = (e) => {
    e.preventDefault();
    if (doThing === "") {
        return;
    }
    setDoThing("");
    setDoList(currentArray => [
        doThing, ...currentArray
    ]);
}
  const onchange = (e) => {
    setDoThing(e.target.value)
}
  const doneIt = (value) => {
    setDoCheck(true);
    doCheck
        ? setDoCheck(false)
        : setDoCheck(true);
    // console.log(value);
}
  return (
 <div className="App">
    <h1 className="title">BucketList</h1>
    <input placeholder="Do Things" onChange={onchange} value={doThing}></input>
    <button onClick={onclick}>+</button>
    <hr/>
    <h2>Added List</h2>
    <p>List:{doList.map((doList,index)=><li key={index}>{doList}
            <button onClick={doneIt}>{doCheck?"done":"not yet"}</button>
        </li>)}</p>
</div>
  );
}

export default App;
