import { useState } from 'react';

function App() {
  const [itemName, setItemName] = useState('one');

  return (
    <section className='section-center'>
      <form action='' className='grocery-form'>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g., eggs'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <p>{itemName}</p>
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
