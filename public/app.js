// const root = document.querySelector('#root')
// const element = document.createElement('h1')
// element.textContent = 'Test'
// element.className = 'root'

// root.appendChild(element)
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
function App() {
  React.useEffect(function () {
    // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    //                 .then(function(response) {
    //                     return response.json();
    //                 })
    //                 .then(function(response){
    //                     return response
    //                 })

    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();
      console.log(response);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Data Fetch");
}
root.render( /*#__PURE__*/React.createElement(App, null));