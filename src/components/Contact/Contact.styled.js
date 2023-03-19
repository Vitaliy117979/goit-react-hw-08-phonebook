import styled from 'styled-components';

export const Button = styled.button`
  background: url(https://html5book.ru/wp-content/uploads/2015/07/background39.png);

  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  :hover,
  :focus,
  :active {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
  :disabled {
    background-color: gray;
    color: #000;
    cursor: not-allowed;
  }
`;

export const Info = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
