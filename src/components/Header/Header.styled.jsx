import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 8px;

  background-color: darkslategray;
`;

export const Navigation = styled.nav`
  display: flex;
  margin-left: 30px;
  margin-right: auto;
`;

export const NavigationItem = styled(NavLink)`
  color: white;
  text-decoration: none;

  padding: 5px;
  border-radius: 2px;
  margin-left: 8px;
  &.active {
    // background-color: white;
    color: lightseagreen;
  }
`;
