import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 6rem;
  margin-bottom: 2rem;
  background: #f2f2f2;
  box-shadow: 1px 1px 8px 1px #bfbd9f;
`;

const StyledLogo = styled.div`
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    padding: 1rem;
  }

  h1 {
    font-size: 24px;
    padding: 1rem 1rem 1rem 0;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;

    :active {
      color: none;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 1rem;
`;

const StyledContainerLogoMenu = styled.div`
  display: flex;
`;

const StyledLi = styled.li`
  padding: 0 1rem;

  a {
    font-size: 18px;
    color: #bfbd9f;
    font-weight: bold;
    text-decoration: none;
  }
`;

const StyledContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
`;

export default {
  Header: StyledHeader,
  Logo: StyledLogo,
  Nav: StyledNav,
  Ul: StyledUl,
  Li: StyledLi,
  ContainerLogoMenu: StyledContainerLogoMenu,
  Avatar: StyledContainerAvatar,
};
