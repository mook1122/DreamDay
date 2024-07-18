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
    transition: max-height ${props => (props.show ? '0.5s ease-in-out' : '0s ease-in-out')};

`;


function BasicInfoSection({ openSection, toggleSection }) {
    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 기본 정보' : '▼ 기본 정보'}</p>
            </ToggleBar>

            <DetailItem $show={openSection}>
                {/* 입력 필드 등 */}
                <h1>안녕하세요</h1>
            </DetailItem>
        </div>
    );
}

export default BasicInfoSection;
