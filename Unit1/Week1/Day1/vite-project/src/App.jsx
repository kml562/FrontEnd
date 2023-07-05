import { useState } from "react";
import "./App.css";
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [result, setres] =  useState(0);
  
  const add = () => {
    console.log(count1,count2);
    let results = parseFloat(count1) + parseFloat(count2) ;
   setres(results);
  };
  const sub = () => {
    const results =  parseFloat(count1) - parseFloat(count2) ;
    setres(results);
  };
  const multi = () => {
    const results =  parseFloat(count1) * parseFloat(count2) ; 
    setres(results);
  };

  const divide = () => {
    const results =  parseFloat(count1) / parseFloat(count2) ; ;
    setres(results);
  }

  const clear = () => {
    setCount1(0);
    setCount2(0);
    setres(0);
  }
  return (
    <>
      <div className="finalData">
        <input type="text" placeholder="value" value={result} onChange={(el) => setCount1(el.target.value)} />
      </div>
      <div className="inputBox">
        <input
          className="firstval"
          type="number"
          placeholder="Number"
          onChange={(el) => setCount1(el.target.value)}
          value={count1}
        />
        <input
          className="Sectval"
          type="number"
          placeholder="Number"
          onChange={(el) => setCount2(el.target.value)}
          value={count2}
        />
      </div>

      <div className="buttons">
        <button onClick={add} > + </button>
        <button onClick={sub}  > - </button>
        <button  onClick={multi} > * </button>
        <button onClick={divide} > % </button>
      </div>

     <button className="clear" onClick={clear}> Clear </button>

    </>
  );
}

export default App;
