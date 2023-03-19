import { Button } from 'components/Contact/Contact.styled';
import { Text } from 'components/Form/Form.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Label, Wrapper } from './Register/Register.styled';

export const Login = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const arrState = [setMail, setPassword];
  const objStateValue = { email, password };
  const dispatch = useDispatch();
  const onHandleLogIn = evt => {
    evt.preventDefault();
    dispatch(logIn(objStateValue));
    reset();
  };
  const onHandleChange = evt => {
    evt.preventDefault();
    const NAME = evt.target.name;
    const VALUE = evt.target.value;
    if (NAME === 'email') {
      setMail(VALUE);
    } else if (NAME === 'password') {
      setPassword(VALUE);
    }
  };

  function reset() {
    return arrState.map(item => item(''));
  }

  return (
    <Form onSubmit={onHandleLogIn}>
      <Wrapper>
        <Label>
          <Text>Mail</Text>
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
      <Button type="submit" disabled={!email || !password}>
        Submit
      </Button>
    </Form>
  );
};
