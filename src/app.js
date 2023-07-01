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
    function eventTodoHandler(event){
        event.preventDefault()

        setTodos([... todos, activity])
        setActivity('')
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
                    return <li key={todo}>{todo}</li>
                })}
            </ul>
        </>
    )
}

root.render(<App />)