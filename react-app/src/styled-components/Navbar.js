import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #3a3a3c;
`;

export const NavList = styled.ul`
    width: 98vw;
    height: 60px;
    margin: 0px;
    padding: 0px 1vw; 0px 1vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    filter: ${props => props.theme === 'dark' ? 'invert(1)' : 'none'};
`;

export const NavItems = styled.li`
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`;

export const LogoBox = styled(IconBox)`
    justify-content: center;
    gap: 0px;
`;
