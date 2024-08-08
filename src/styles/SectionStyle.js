import React from 'react';
import styled from 'styled-components';


export const ToggleBar = styled.div`
    background-color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;

    > p {
        margin-left: 15px;
        font-size: 18px;
    }
`;

export const DetailItem = styled.div.withConfig({
    shouldForwardProp: (prop) => !['show'].includes(prop),
})`
    border-top: 1px solid #eee;
    background-color: white;
    width: 100%;
    max-height: ${props => (props.show === 'on' ? '500px' : '0')};
    overflow: hidden;
    transition: max-height ${props => (props.show === 'on' ? '0.5s ease-in-out' : '0s ease-in-out')};


`;