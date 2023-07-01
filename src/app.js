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
    const [edit, setEdit] = React.useState({})

    function generateId(){
        return Date.now()
    }

    function saveTodoHandler(event){
        event.preventDefault()
        if(edit.id){
            const editTodoIndex = todos.findIndex(function(todo){
                return todo.id == edit.id
            });
            const updatedTodo = {
                id : edit.id,
                activity : activity
            }
            const updatedTodos = [...todos]
            updatedTodos[editTodoIndex] = updatedTodo
            return setTodos(updatedTodos)

        }

        setTodos([... todos, {
            id : generateId(),
            activity
        }])
        setActivity('')
    }

    function removeTodoHandler(todoId){
        const filterTodos = todos.filter(function(todo){
            return todo.id != todoId;
        })

        setTodos(filterTodos)
    }

    function editTodoHandler(todo){
        setActivity(todo.activity)
        setEdit(todo)
    }

    return (
        <>
            <h1>Simple Todo List</h1>
            <form onSubmit={saveTodoHandler}>
                <input type="text" value={activity} placholder="Aktifitas" onChange={function(event){
                    setActivity(event.target.value);
                }}/>
                <button>
                    {edit.id ? 'Simpan Perubahan' : 'Simpan'}
                </button>
            </form>
            <ul>
                {todos.map(function(todo){
                    return <li key={todo.id}>{todo.activity}
                            <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                            <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                           </li>
                })}
            </ul>
        </>
    )
}

root.render(<App />)