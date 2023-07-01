// const root = document.querySelector('#root')
// const element = document.createElement('h1')
// element.textContent = 'Test'
// element.className = 'root'

// root.appendChild(element)
const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)

function App(){
    const [news, setNews] = React.useState([])
    React.useEffect(function(){
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            
            const response = await request.json();

            setNews(response)
        }
        
        getData();
    }, [])
    return (
    <>
        <h1>Data Fetch</h1>
        <ul>
            {news.map(function(item){
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    </>
    )
}

root.render(<App />)