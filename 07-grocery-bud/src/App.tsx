import { Alert, BasketItem } from './types';
import { Basket, Toast } from './components';
import { FormEvent, useState } from 'react';

function App() {
  const [itemName, setItemName] = useState('');
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [alert, setAlert] = useState<Alert>({
    show: false,
    message: '',
    type: 'error',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newItemTitle = itemName;

    if (!newItemTitle) {
      showAlert({
        show: true,
        message: 'Please enter item to add to basket',
        type: 'error',
      });
      return;
    }

    setBasket([
      ...basket,
      {
        title: newItemTitle,
      },
    ]);
    setItemName('');
    showAlert({
      show: true,
      message: `'${newItemTitle}' added to the basket`,
      type: 'success',
    });
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const showAlert = (alert?: Alert) => {
    if (alert) {
      setAlert({ ...alert });
    } else {
      setAlert({ show: false });
    }
  };

  return (
    <section className='section-center'>
      <form action='' className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Toast {...alert} removeAlert={showAlert} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g., eggs'
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>

      {basket.length > 0 && (
        <div className='grocery-container'>
          <Basket items={basket} />
          <button className='clear-btn' onClick={clearBasket}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
