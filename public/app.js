// const root = document.querySelector('#root')
// const element = document.createElement('h1')
// element.textContent = 'Test'
// element.className = 'root'

// root.appendChild(element)
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  function generateId() {
    return Date.now();
  }
  function saveTodoHandler(event) {
    event.preventDefault();
    if (edit.id) {
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });
      const updatedTodo = {
        id: edit.id,
        activity: activity
      };
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      return setTodos(updatedTodos);
    }
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity('');
  }
  function removeTodoHandler(todoId) {
    const filterTodos = todos.filter(function (todo) {
      return todo.id != todoId;
    });
    setTodos(filterTodos);
  }
  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placholder: "Aktifitas",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, edit.id ? 'Simpan Perubahan' : 'Simpan')), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}
root.render( /*#__PURE__*/React.createElement(App, null));