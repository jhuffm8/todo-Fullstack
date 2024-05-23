import { useState, useRef, useEffect} from 'react'
import './App.css'


function App() {

  const [todos, setTodos] = useState([])

  const textRef = useRef()
  const completeRef = useRef()

  useEffect(() => {
   const getTodos = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/todos`)
      const data = await res.json()
      console.log(data)
      setTodos(data)

    } catch (error) {
      console.log(error)
    }
  
    }
    getTodos()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(textRef.current.value)
    console.log(completeRef.current.checked)

  }


  return (
    <>
     <h1>Todos</h1>
     <form onSubmit={handleSubmit}>
      <label>
        I want to :
        <br />
        <input  type="text" ref={textRef}/>
      </label>
      <label >
        <input type="checkbox" ref={completeRef} />
      </label>
      <br /> <br />
      <button>Add Todo</button>
     </form>
     <br /> <br />
     {todos.map((todo) => 
      <p style={{ textDecoration: todo.completed ? 'line-through' : ''}} 
        key={todo._id}>
        {todo.text}
        </p>
      )}



    </>
  )
}

export default App
