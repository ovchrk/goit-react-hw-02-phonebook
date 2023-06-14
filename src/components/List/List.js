import React from 'react';
import css from '../List/List.module.css';

export const List = ({ filteredContacts, handleDelete }) => {
  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={css.box}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.contacts__item}>
              &#8728; {name}: {number}{' '}
              <button
                type="button"
                className={css.button}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.box}>Contacts not found</div>
      )}
    </div>
  );
};
