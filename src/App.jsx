import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './users'


function App() {
  
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert("button 2 clicked")
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>

      <Users></Users>

     <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert("Third clicked")}}>Third</button>
      <button onClick={()=> addToFive(99)}>Fourth</button>
    </>
  )
}

export default App
