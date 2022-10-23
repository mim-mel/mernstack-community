import { useState } from 'react';
import {
  NavBackground,
  Nav,
  Logo,
  UlWrap,
  Ul,
  StyledLink,
  BurgerIcon,
} from '../Style/HeadingCSS';

const Heading = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const dropdownToggle = () => {
    if (dropdownMenu === false) {
      setDropdownMenu(true);
    } else {
      setDropdownMenu(false);
    }
  };

  return (
    <NavBackground>
      <Nav>
        <Logo>
          <img src='image/beer.png' alt='beer-logo' />
          Beer-Pong
        </Logo>
        <UlWrap dropdownMenu={dropdownMenu}>
          <Ul>
            <StyledLink to='/upload'>UPLOAD</StyledLink>
            <StyledLink to='/list' marginleft='true'>
              LIST
            </StyledLink>
          </Ul>
          <Ul marginleft='true'>
            <StyledLink to=''>LOGOUT</StyledLink>
            <StyledLink to='' marginleft='true'>
              MYPAGE
            </StyledLink>
          </Ul>
        </UlWrap>
        <BurgerIcon
          onClick={() => {
            dropdownToggle();
          }}
          src={dropdownMenu ? 'image/cross.png' : 'image/menu-burger.png'}
          alt='menu-burger'
        />
      </Nav>
    </NavBackground>
  );
};

export default Heading;
