// const root = document.querySelector('#root')
// const element = document.createElement('h1')
// element.textContent = 'Test'
// element.className = 'root'

// root.appendChild(element)
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
function App() {
  const [news, setNews] = React.useState([]);
  React.useEffect(function () {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();
      setNews(response);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"), /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}
root.render( /*#__PURE__*/React.createElement(App, null));