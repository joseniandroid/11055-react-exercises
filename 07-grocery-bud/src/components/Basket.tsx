import { FaEdit, FaTrash } from 'react-icons/fa';

import { BasketItem } from '../types';

type BasketProps = {
  items: BasketItem[];
};

export const Basket = ({ items }: BasketProps) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        return (
          <article className='grocery-item'>
            <p className='title'>{item.title}</p>
            <div className='btn-container'>
              <button type='button' className='edit-btn'>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn'>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
