import { Button, Info } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const hendleDeleteContact = () => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Info>
        {name}: {number}
      </Info>
      <Button type="button"  onClick={hendleDeleteContact}>
        Удалить
      </Button>
    </>
  );
};


