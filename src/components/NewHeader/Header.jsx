import { NavLink } from 'react-router-dom';
import { AppBar, NavWrapper, FlexWrapper } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { UserBar } from './UserBar/UserBar';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [IsLogedIn, setIsLogedIn] = useState(true);

  const onBurgerButton = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <AppBar>
      <Container>
        <NavWrapper>
          <NavLink to="/welcome">
            <Logo />
          </NavLink>
          {IsLogedIn && (
            <FlexWrapper>
              <NavBar />
              <UserBar onBurgerButton={setMenuIsOpen} />
            </FlexWrapper>
          )}
        </NavWrapper>
      </Container>
      {menuIsOpen && <BurgerMenu onBurgerButton={onBurgerButton} />}
    </AppBar>
  );
};
