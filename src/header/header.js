import React from 'react';

import styled from 'styled-components';
const Title = styled.h1`
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    margin: 0; 
`;

const Header = () => {
    return (
        <Title>Todos</Title>
    )
}

export default Header;