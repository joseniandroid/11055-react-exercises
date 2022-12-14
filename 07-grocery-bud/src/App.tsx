import { Alert, BasketItem } from './types';
import { Basket, Toast } from './components';
import { FormEvent, useEffect, useState } from 'react';

const getCachedBasket = () => {
  const basket = localStorage.getItem('basket');
  if (basket) {
    return JSON.parse(basket);
  }
  return [];
};

function App() {
  const [itemName, setItemName] = useState('');
  const [basket, setBasket] = useState<BasketItem[]>(getCachedBasket());
  const [alert, setAlert] = useState<Alert>({
    show: false,
    message: '',
    type: 'error',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newItemTitle = itemName;

    if (!newItemTitle) {
      showAlert({
        show: true,
        message: 'Please enter item to add to basket',
        type: 'error',
      });
      if (isEditing) {
        setIsEditing(false);
      }
      return;
    }

    if (isEditing) {
      // Update the item to the basket
      const updatedBasket = basket.map((item) => {
        if (item.id === editId) {
          return { ...item, title: newItemTitle };
        }
        return item;
      });
      setBasket(updatedBasket);

      setItemName('');
      setEditId('');
      setIsEditing(false);

      showAlert({
        show: true,
        message: `Item changed to '${newItemTitle}'`,
        type: 'success',
      });

      return;
    }

    setBasket([
      ...basket,
      {
        id: new Date().getTime().toString(),
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

  const editItem = (id: string) => {
    const itemToEdit = basket.find((item) => item.id === id);

    if (!itemToEdit) {
      showAlert({
        show: true,
        message: 'Item to edit not found',
        type: 'error',
      });
      return;
    }

    setEditId(id);
    setIsEditing(true);
    setItemName(itemToEdit.title);
  };

  const removeItem = (id: string) => {
    const itemToDelete = basket.find((item) => item.id === id);
    if (!itemToDelete) {
      return;
    }

    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
    showAlert({
      show: true,
      message: `'${itemToDelete.title}' removed from the basket`,
      type: 'error',
    });
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
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {basket.length > 0 && (
        <div className='grocery-container'>
          <Basket items={basket} editItem={editItem} removeItem={removeItem} />
          <button className='clear-btn' onClick={clearBasket}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
