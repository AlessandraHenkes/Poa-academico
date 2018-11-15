import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Logo from '../../assets/images/Logo.png';
import './NavbarPoaAcademico.scss';

export default class NavbarPoaAcademico extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <Navbar
          brand={<img className='logo' src={Logo} alt='PoaAcademico' />}
          right>
          <NavItem href='/'>Início</NavItem>
          <NavItem href='/entrar'>Entrar</NavItem>
        </Navbar>
      </div>
    );
  }
}
