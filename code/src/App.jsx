import './App.css'
import { CountContext } from './context';
import { useContext, useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count = {count} setCount= {setCount}/>
      </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
  return <div>
  <CountRenderer/>
  <Button setCount={setCount}/>
  </div>
}

function CountRenderer(){
const count = useContext(CountContext);
return <div>
  {count}
</div>
}


function Button({setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count + 1);
    }}>
      Increase
    </button>

    <button onClick={()=>{
      setCount(count - 1);
    }}>
      Decrease
    </button>
  </div>

}

export default App
