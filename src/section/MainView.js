import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { CautionFont } from '../styles/MainCard';

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
    max-height: ${props => (props.show === 'on' ? '500px' : '0')};
    overflow: hidden;
    transition: max-height ${props => (props.show === 'on' ? '0.5s ease-in-out' : '0s ease-in-out')};

    > div {
        display: flex;
        align-items: center;
        padding: 10px;

    }

    p {
        width:80px;
    }

`;


const ImageUploadWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  input[type="file"] {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  &::before {
    content: '+';
    font-size: 36px;
    color: #ccc;
    text-align: center;
    position: absolute;
  }

  &:hover {
    border-color: #999;
  }
`;
function MainView({ openSection, toggleSection, previewUrl, setPreviewUrl }) {


    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setPreviewUrl(URL.createObjectURL(selectedFile)); // 이미지 미리보기 URL 생성
            // console.log(URL.createObjectURL(selectedFile));
            
        }
    };

    // console.log(previewUrl);


    return (
        <div>
            <ToggleBar onClick={toggleSection}>
                <p>{openSection === 'off' ? '▲ 대표 사진' : '▼ 대표 사진'}</p>
            </ToggleBar>

            <DetailItem show={openSection}>
                <CautionFont>
                    <img src={`${process.env.PUBLIC_URL}/img/caution.png`}></img>
                    이미지 첨부를 하지 않을시 지정된 대표 이미지가 첨부 됩니다.
                </CautionFont>
                <div>
                    <p>사진</p>
                    <ImageUploadWrapper>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </ImageUploadWrapper>
                </div>
            </DetailItem>
        </div>
    );
}



export default MainView;
