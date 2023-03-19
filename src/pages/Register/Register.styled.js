import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 400px;
  gap: 15px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const Label = styled.label`
  display: grid;
  gap: 15px;
`;
export const Input = styled.input`
  display: block;
  padding: 8px;
  padding-left: 20px;
  border-radius: 8px;
`;

