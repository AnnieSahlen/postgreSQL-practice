import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
  }, [])

  return (
    <>
      <h1>Christmas markets in Gothenburg 2024</h1>
      {data.map((item) => (
        <li key={item.christmasmarketid}>
          <p>{item.christmasmarketname}</p>
          <p>{item.christmasmarketlocation}</p>
          <p>{item.christmasmarketdate}</p>
        </li>
      ))}
    </>
  )
}

export default App
