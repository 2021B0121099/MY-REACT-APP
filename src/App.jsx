import {useState} from 'react'
import './App.css'
const App = () => {
  const[count,setCount]=useState(0);

  return (
    <div className='card'><p>You clicked {count} times</p>
    <button onClick={()=>setCount(count+1)}>
      Increment
    </button>
    <button onClick={()=>setCount(count-1)}>
     Decrement
    </button>
    </div>
  );
}
export default App