import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import BugList from './components/BugList'

function App() {
  const [data, setData] = useState(null)

  useEffect(async () => {
    const result = await axios.get('/getReports')
    setData(result.data)
  }, [])

  return (
    <div className="App">
      {data && <BugList reports={data.reports.elements} />}
    </div>
  )
}

export default App
