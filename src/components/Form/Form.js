import { Button } from 'components/Contact/Contact.styled';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { postContact } from '../../redux/contacts/operations';
import { Text, Input
 } from './Form.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onHandlerChange = event => {
    const { name, value } = event.target;
    console.log(event);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const notify = () => toast(`Sorry, ${name} is already in contacts.`);

  const onHandleSubmit = e => {
    if (contacts.some(contact => contact.name === name)) {
      notify(name);
      return;
    }
    e.preventDefault();

    dispatch(postContact({name, number}));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={onHandleSubmit}>
        <label>
          <Text>name</Text>
          <Input

            onChange={onHandlerChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <Text>Number</Text>
          <Input

            onChange={onHandlerChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
<div> <Button type="submit">Add contact</Button></div>
       
      </form>
    </>
  );
};
