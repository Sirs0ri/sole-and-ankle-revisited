import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileMenuSide>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>
        </MobileMenuSide>
        <LogoWrapper />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  /* height: 72px; */
  border-bottom: 1px solid var(--color-gray-300);

  overflow-y: auto;
  
  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
  }
  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 16px ;
    padding-right: 16px ;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9vw - 4.5rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  
  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const MobileMenuSide = styled.div`
  display: none;
  flex: 1;
  align-self: center;
  flex-direction: row-reverse;
  gap: 36px;
  
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
