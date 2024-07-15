import React from 'react';
import styled from 'styled-components';

const ToggleBar = styled.div`
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

const DetailItem = styled.div`
    border-top: 1px solid #eee;
    background-color: white;
    width: 100%;
    max-height: ${props => (props.show ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
`;

function ThemeSection({ bg, setBg, openSection, toggleSection }) {
    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 테마' : '▼ 테마'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <button onClick={() => setBg('lightblue')}>Light Blue</button>
                <button onClick={() => setBg('lightgreen')}>Light Green</button>
                <button onClick={() => setBg('lightcoral')}>Light Coral</button>
            </DetailItem>
        </div>
    );
}

export default ThemeSection;