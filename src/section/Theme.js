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

function ThemeSection({ bg, setBg, titleColor, setTitleColor, openSection, toggleSection }) {
    
    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection ? '▲ 테마' : '▼ 테마'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>

                <div>
                    <p>배경 색상</p>
                    <div style={{ marginLeft: '15px' }}>
                        <input
                            type="radio"
                            id="#FAFAFA"
                            name="theme"
                            value="#FAFAFA"
                            onChange={() => setBg('#FAFAFA')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#FAFAFA" htmlFor="#FAFAFA" />

                        <input
                            type="radio"
                            id="#FEF7F7"
                            name="theme"
                            value="#FEF7F7"
                            onChange={() => setBg('#FEF7F7')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#FEF7F7" htmlFor="#FEF7F7" />

                        <input
                            type="radio"
                            id="#F2ECE6"
                            name="theme"
                            value="#F2ECE6"
                            onChange={() => setBg('#F2ECE6')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#F2ECE6" htmlFor="#F2ECE6" />

                        <input
                            type="radio"
                            id="#F1EDEE"
                            name="theme"
                            value="#F1EDEE"
                            onChange={() => setBg('#F1EDEE')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#F1EDEE" htmlFor="#F1EDEE" />

                    </div>
                </div>

                <div>
                    <p>강조 색상</p>
                    <div style={{ marginLeft: '15px' }}>
                        <input
                            type="radio"
                            id="black"
                            name="theme"
                            value="black"
                            onChange={() => setTitleColor('black')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="black" htmlFor="black" />

                        <input
                            type="radio"
                            id="#F8C3C3"
                            name="theme"
                            value="#F8C3C3"
                            onChange={() => setTitleColor('#F8C3C3')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#F8C3C3" htmlFor="#F8C3C3" />

                        <input
                            type="radio"
                            id="#BE9164"
                            name="theme"
                            value="#BE9164"
                            onChange={() => setTitleColor('#BE9164')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#BE9164" htmlFor="#BE9164" />

                        <input
                            type="radio"
                            id="#CFA7B4"
                            name="theme"
                            value="#CFA7B4"
                            onChange={() => setTitleColor('#CFA7B4')}
                            style={{ display: 'none' }}
                        />
                        <ColorOption color="#CFA7B4" htmlFor="#CFA7B4" />

                    </div>
                </div>


            </DetailItem>
        </div>
    );
}

export default ThemeSection;