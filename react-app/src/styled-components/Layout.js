import styled from "styled-components";

export const AppBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme === 'light' ? 'white' : '#191919'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
