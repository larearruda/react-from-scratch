import styled from 'styled-components';

// flex flex-col items-center gap-4 px-2 sm:py-5
export const MenuArea = styled.div`
  position: fixed;
  top: 0; /* Alinha o menu ao topo da página */
  left: 0; /* Alinha o menu à esquerda  */
  height: 100vh; /* view height Faz o menu ocupar toda a altura da tela */
  width: 3.5rem;         
  display: flex; /* Torna o elemento flexível */
  border-right: 1px solid #e2e8f0;
  background-color:  ${(props) => props.theme.bg_1};
`;


export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.25rem;              /* h-9 = 2.25rem (36px) */
  width: 2.25rem;               /* w-9 = 2.25rem (36px) */
  align-items: center;          /* Center items vertically */
  justify-content: center;   
`;

export const NavItem = styled.div`
  height: 100%;
  padding-top: 1.25rem; /* 20px */
  padding-left: 1.25rem; 
`;