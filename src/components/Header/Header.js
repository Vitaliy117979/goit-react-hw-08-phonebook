import { Text } from 'components/Form/Form.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { ROUTES } from 'utils/routes';
import { HeaderStyled, HelloUser, StyledNavLink, LogoutBtn, Wrapper, NameUser, } from './Header.styled';

export const Header = () => {
  const { user, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const { HOME, CONTACTS, REGISTER, LOGIN, NOT_FOUND } = ROUTES;
  return (
    <HeaderStyled>
      <nav>
        <StyledNavLink to={HOME}>Home</StyledNavLink>
      </nav>
      <div>
        {isLoggedIn ? (
          <Wrapper>
            <StyledNavLink to={CONTACTS}>Contacts</StyledNavLink>
            <HelloUser>
              <NameUser>{user.name}</NameUser>
              <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
                Logout
              </LogoutBtn>
            </HelloUser>
          </Wrapper>
        ) : (
          <>
            <StyledNavLink to={REGISTER}>Register</StyledNavLink>
            <StyledNavLink to={LOGIN}>Login</StyledNavLink>
          </>
        )}
      </div>
    </HeaderStyled>
  );
};
