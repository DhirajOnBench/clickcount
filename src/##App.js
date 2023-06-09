import React from 'react'
import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function App() {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: 'nabin'
    },
    {
      id: 1,
      name: 'Khamosh'
    },
    {
      id: 2,
      name: 'Kiran'
    },
    {
      id: 3,
      name: 'nitesh'
    },
    {
      id: 4,
      name: 'Dhiraj'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default App