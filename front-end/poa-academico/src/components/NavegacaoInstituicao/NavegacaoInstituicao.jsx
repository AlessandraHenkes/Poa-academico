import React from 'react';
import { Icon, SideNav, SideNavItem } from 'react-materialize';
import './NavegacaoInstituicao.scss';

export default class NavegacaoInstituicao extends React.Component {
  render() {
    return (
      <div className='navegacao-instituicao'>
        <SideNav
          trigger={
            <div className='nav-drawer'>
              <button className='drawer-trigger'>
                <Icon className='drawer-menu-icon'>menu</Icon>
              </button>
            </div>
          }
          options={{ closeOnClick: true, draggable: true }}>
          <div className='user-info'>
            <SideNavItem className='close-drawer'>
              <Icon className='drawer-menu-icon'>arrow_back</Icon>
            </SideNavItem>
            <div className='user-name'>Name</div>
          </div>

          <SideNavItem waves href='/inicial'>
            Gerenciar alunos
          </SideNavItem>
          <SideNavItem waves href='/professores'>
            Gerenciar professores
          </SideNavItem>
          <SideNavItem waves href='/disciplinas'>
            Gerenciar disciplinas
          </SideNavItem>
          <SideNavItem divider />
          <SideNavItem waves onClick={this.props.onLogout}>
            Sair
          </SideNavItem>
        </SideNav>
      </div>
    );
  }
}
