import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0, auto;
  height: 60px;
  background-color: burlywood;
  margin-bottom: 12px;
`;
export const StyledNavLink = styled(NavLink)`

  padding: 10px 0px;
  margin: 0px 10px;
  opacity: 0.8;
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    border-bottom: 3px black solid;
    font-weight: bold;
    opacity: 1;
  }
  &.active {
    border-bottom: 3px black saddlebrown;
    font-weight: bold;
    opacity: 1;
  }
`;


export const HelloUser = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  margin: 0, auto;
  height: 60px;
  background-color: burlywood;
`;


export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  margin: 0, auto;
  height: 60px;
 
`;
export const NameUser = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const LogoutBtn = styled.button`
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 12px;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0059b3;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.5);
  }
`;

