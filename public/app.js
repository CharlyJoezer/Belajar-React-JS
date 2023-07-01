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
  function generateId() {
    return Date.now();
  }
  function eventTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);
    setActivity('');
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: eventTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placholder: "Aktifitas",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity);
  })));
}
root.render( /*#__PURE__*/React.createElement(App, null));