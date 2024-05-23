import { useState, useRef, useEffect} from 'react'
import './App.css'

const BASE_URL = `http://localhost:8080/api/todos`
function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [todos, setTodos] = useState([])

  const textRef = useRef()
  const completeRef = useRef()

  useEffect(() => {
   const getTodos = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(BASE_URL)
      const data = await res.json()
      console.log(data)
      setTodos(data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  
    }
    getTodos()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      text: textRef.current.value,
      completed: completeRef.current.checked,
      user: "Omni-Man"
    }
   try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newTodo = await res.json()
    setTodos([...todos, newTodo])

   } catch (error) {
    console.log(error.message)
   } 
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
