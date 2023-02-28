import {useEffect,useState} from 'react';
import './App.css';
import TestUnmount from './components/TestUnmount';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [isShow , setIsShow]=useState(false);
  const increaseCounter=()=>{
    setCounter((prevCounter)=>prevCounter+1);
  }
const toggle=()=>{
  setIsShow((prevIsShow)=>!prevIsShow);
}
  return (
    <div className="App">
      
      <div>
      <label>Name</label>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <p>{name}</p>
      </div>
      <div>
        {counter}
        <button type="button" onClick={increaseCounter}>+1</button>
      </div>
      <div>
        <button type="button" onClick={toggle}>Toggle</button>
        {isShow && <TestUnmount />}
      </div>
    </div>
  );
}

export default App;
