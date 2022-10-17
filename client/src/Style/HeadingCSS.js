import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const NavBackground = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 65px;
  background-color: #1e2a78;
  position: relative;
  border-bottom: 0px;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 2px solid rgba(255, 255, 255);
  }
`;

const Nav = styled.nav`
  width: 1100px;
  height: 65px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const BurgerIcon = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 6vw;
  }
`;

const Logo = styled.div`
  width: 20%;
  font-size: 30px;
  color: white;
  font-family: 'Fredoka One', cursive;
  letter-spacing: 1.3px;
  img {
    width: 40px;
    margin-right: 10px;
    margin-bottom: 5px;
  }

  @media (max-width: 1400px) {
    width: 30%;
    font-size: 2vw;
    img {
      width: 3vw;
    }
  }

  @media (max-width: 1024px) {
    width: 30%;
    font-size: 3vw;
    img {
      width: 4vw;
    }
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: 5vw;
    img {
      width: 6vw;
      margin-right: 5px;
    }
  }
`;

const UlWrap = styled.div`
  width: 80%;
  padding-left: 5%;
  display: flex;
  @media (max-width: 1400px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    background-color: #1e2a78;
    padding-left: 0;
    padding: 20px 0;
    display: ${(props) => (props.dropdownMenu ? 'flex' : 'none')};
  }
`;

const Ul = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-left: ${(props) => props.marginleft && 'auto'};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }
`;

const StyledLink = styled(Link)`
  color: #f9ff21;
  list-style: none;
  font-family: 'Fredoka One', cursive;
  letter-spacing: 2px;
  font-size: 20px;
  text-decoration: none;
  margin-left: ${(props) => props.marginleft && '40px'};
  &:hover {
    color: #ff1f5a;
  }
  @media (max-width: 1400px) {
    font-size: 1.5vw;
  }
  @media (max-width: 1024px) {
    font-size: 2.2vw;
    margin-left: ${(props) => props.marginleft && '30px'};
  }
  @media (max-width: 768px) {
    font-size: 3.5vw;
    margin-left: 0;
    padding: 10px 0;
  }
`;

export { NavBackground, Nav, Logo, UlWrap, Ul, StyledLink, BurgerIcon };
