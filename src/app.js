// const root = document.querySelector('#root')
// const element = document.createElement('h1')
// element.textContent = 'Test'
// element.className = 'root'

// root.appendChild(element)
const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)

function App(){
    const [activity, setActivity] = React.useState('')
    const [todos, setTodos] = React.useState([])

    function generateId(){
        return Date.now()
    }

    function eventTodoHandler(event){
        event.preventDefault()

        setTodos([... todos, {
            id : generateId(),
            activity : activity
        }])
        setActivity('')
    }

    function removeTodoHandler(todoId){
        const filterTodos = todos.filter(function(todo){
            return todo.id != todoId;
        })

        setTodos(filterTodos)
    }
    return (
        <>
            <h1>Simple Todo List</h1>
            <form onSubmit={eventTodoHandler}>
                <input type="text" value={activity} placholder="Aktifitas" onChange={function(event){
                    setActivity(event.target.value);
                }}/>
                <button>Tambah</button>
            </form>
            <ul>
                {todos.map(function(todo){
                    return <li key={todo.id}>{todo.activity}
                            <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                           </li>
                })}
            </ul>
        </>
    )
}

root.render(<App />)