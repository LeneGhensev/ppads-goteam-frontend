import styled from "styled-components";

const StyledContainer = styled.header``;

const StyledCabecalho = styled.div``;

export default { Container: StyledContainer, Cabecalho: StyledCabecalho };

// .cabecalho {
//     background-color: var(--cor-contraste-claro);
//     border-radius: 0 0 10px 10px;
//     box-shadow: var(--sombra);
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     align-items: center;
//     height: 4.75rem;
// }

// .menu-hamburguer {
//     width: 1.5rem;
//     height: .75rem;
//     transition: .2s;
// }

// .menu-hamburguer--ativo .menu-hamburguer__icone {
//     transform: rotate(90deg);
//     transition: .2s;
// }

// .menu-hamburguer__icone {
//     display: block;
//     width: 100%;
//     height: 100%;
//     background-image: url(../../img/menu.svg);
//     background-size: contain;
// }

// .cabecalho__logo {
//     width: 3rem;
// }

// .cabecalho__titulo {
//     font-family: var(--fonte-familia-logo);
//     font-size: var(--fonte-tamanho-logo);
//     margin-left: .5rem;
// }

// .menu-cabecalho-background {
//     background-color: #00000020;
//     position: fixed;
//     top: 0;
//     left: -100vw;
//     width: 100vw;
//     height: 100vh;
// }

// .menu-cabecalho {
//     position: fixed;
//     left: -100vw;
//     top: 0;
//     background-color: var(--cor-contraste-claro);
//     width: 70vw;
//     height: 100vh;
//     box-sizing: border-box;
//     font-size: var(--fonte-tamanho-menu-cabecalho-item);
//     font-weight: var(--fonte-peso-menu-cabecalho-item);
//     z-index: 10;
//     transition: .25s;
// }

// .menu-cabecalho__fechar {
//     position: absolute;
//     right: -2.5rem;
//     top: .5rem;
//     color: var(--cor-contraste-claro);
//     padding: 1rem;
//     box-sizing: border-box;
//     border-radius: 50%;
//     background-color: var(--cor-primaria);
// }

// .menu-cabecalho__fechar::before {
//     content: 'X';
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
// }

// .menu-item {
//     display: block;
//     padding-top: 1.5rem;
//     padding-left: 1rem;
//     padding-bottom: 1.5rem;
//     border-bottom: 1px solid var(--cor-divisao);
// }

// .menu-item--entrar {
//     background-color: var(--cor-primaria);
//     color: var(--cor-contraste-claro);
//     border: none;
// }

// .menu-cabecalho--ativo {
//     left: 0;
//     top: 0;
//     transition: .25s;
// }

// .menu-cabecalho--ativo + .menu-cabecalho-background {
//     left: 0;
// }

// @media(min-width: 900px) {
//     .cabecalho {
//         grid-template-areas: "menu logo .";
//         height: 6.75rem;
//     }

//     .cabecalho-container {
//         grid-area: logo;
//     }

//     .menu-hamburguer {
//         display: none;
//     }

//     .menu-cabecalho {
//         justify-self: flex-start;
//         position: static;
//         width: fit-content;
//         height: fit-content;
//         grid-area: menu;
//     }

//     .menu-cabecalho__fechar {
//         display: none;
//     }

//     .menu-cabecalho-background {
//         display: none;
//     }

//     .menu-itens {
//         display: flex;
//         align-items: center;
//     }

//     .menu-item {
//         border: none;
//         padding: 0;
//         margin-right: 1rem;
//     }

//     .menu-item--entrar {
//         border-radius: 2rem;
//         padding: 1rem 1.5rem;
//     }
// }
