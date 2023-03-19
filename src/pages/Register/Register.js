import { Button } from 'components/Contact/Contact.styled';
import { Text } from 'components/Form/Form.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Wrapper, Label, Input } from './Register.styled';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  console.log(password);
  const arrState = [setName, setMail, setPassword];
  const objStateValue = {name, email, password}
  const dispatch = useDispatch()
  const onHandleSubmit = evt => {
    evt.preventDefault();
    dispatch(register(objStateValue))
    reset();
  };
  const onHandleChange = evt => {
    evt.preventDefault();
    const NAME = evt.target.name;
    const VALUE = evt.target.value;
    if (NAME === 'name') {
      setName(VALUE);
    } else if (NAME === 'email') {
      setMail(VALUE);
    } else if (NAME === 'password') {
      setPassword(VALUE);
    }
  };

  function reset() {
    return arrState.map(item => item(''));
  }

  return (
    <Form onSubmit={onHandleSubmit}>
      <Wrapper>
        <Label>
          <Text>Name </Text>
          <Input
            type="text"
            value={name}
            name="name"
            onChange={onHandleChange}
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <Text>Mail </Text>
          <Input
            type="email"
            value={email}
            name="email"
            onChange={onHandleChange}
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <Text>Password </Text>
          <Input
            type="password"
            value={password}
            name="password"
            onChange={onHandleChange}
          />
        </Label>
      </Wrapper>
      <Button type="submit" disabled={!name || !email || !password}>Submit</Button>
    </Form>
  );
};
