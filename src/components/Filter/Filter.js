import { Input } from 'components/Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';
import { FilterText } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <label>
      <FilterText>Find contacts by name:</FilterText>
      <Input type="text" value={filter} onChange={handleChange}></Input>
    </label>
  );
};
