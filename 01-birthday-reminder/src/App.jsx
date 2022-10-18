import { useState } from 'react'
import CelebrantList from './CelebrantList';

import data from './data';

import './App.css'

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <div className='card'>
        <h3>{people.length} birthdays today</h3>
        <CelebrantList people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  )
}

export default App
