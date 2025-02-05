import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; /* viewport height */
    /*
    esse panel está ultrapassando a visualização da tela. 
    estou tentando ajustar a visualização do container em App
    o tamanho do menu está em unidade de medida 3.5rem ... talvez é essa incompatibilidade
    */
    min-width: 96vw;
    background-color:  ${(props) => props.theme.bg_2};
    margin-left: 3.5rem;
`;

