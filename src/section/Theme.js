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

const DetailItem = styled.div.withConfig({
    shouldForwardProp: (prop) => !['show'].includes(prop),
})`
    border-top: 1px solid #eee;
    background-color: white;
    width: 100%;
    max-height: ${props => (props.show ? '500px' : '0')};
    overflow: hidden;
    transition: max-height ${props => (props.show ? '0.5s ease-in-out' : '0s ease-in-out')};


    > div {
        display: flex;
        align-items: center;
        padding: 10px;
    }

`;


const ColorOption = styled.label`
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 5px;
    border: 2px solid #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    input {
        display: none;
    }


    input:checked + & {
        border: 2px solid #aaa;
    }
`;

function ThemeSection({ setBg, setTitlecolor, openSection, toggleSection }) {

    const backgroundColors = ['#FAFAFA', '#FEF7F7', '#F2ECE6', '#F1EDEE'];
    const titleColors = ['black', '#F8C3C3', '#BE9164', '#CFA7B4'];

    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 테마' : '▼ 테마'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <div>
                    <p>배경 색상</p>
                    <div style={{ marginLeft: '15px' }}>
                        {backgroundColors.map((color) => (
                            <React.Fragment key={color}>
                                <input
                                    type="radio"
                                    id={color}
                                    name="theme"
                                    value={color}
                                    onChange={() => setBg(color)}
                                    style={{ display: 'none' }}
                                />
                                <ColorOption color={color} htmlFor={color} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div>
                    <p>강조 색상</p>
                    <div style={{ marginLeft: '15px' }}>
                        {titleColors.map((color) => (
                            <React.Fragment key={color}>
                                <input
                                    type="radio"
                                    id={color}
                                    name="theme"
                                    value={color}
                                    onChange={() => setTitlecolor(color)}
                                    style={{ display: 'none' }}
                                />
                                <ColorOption color={color} htmlFor={color} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </DetailItem>
        </div>
    );
}

export default ThemeSection;