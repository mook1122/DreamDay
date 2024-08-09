import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
#root {
    height: 100%;
}
html {
    height: 100%;
}
  body {
    height: 100%;
}
`


const MyPageContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 85vh;
padding-top: 15vh;
`;

const MyPageContent = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
width: 100%;
margin: 10px;
`;

const MyPageTitle = styled.p`

font-size: 30px;
font-weight: bold;

`;

const Bar = styled.div`

width: 100%;
max-width: 600px;

border-bottom: 1px solid #eee;

`;

const MyCardBox = styled.div`


width: 100%;
max-width: 600px;

display: flex;
justify-content: space-between;


.mycard-wrap-1 {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 70px;
        margin: 0 10px 0 10px;
    }

    @media(max-width:1100px) {
    img {
        width: 60px;
    }
    }
    @media(max-width:650px) {
        img {
            width: 50px;
        }

        .move_btn,
        .share_btn {
            font-size: 12px;
        }
    }

    .move_btn {
        margin-right: 10px;
    }

    .move_btn,
    .share_btn {
      border: 1px solid #000;
      padding: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 5px;
      margin-right: 10px;
      background-color: #fff;
    }

    .move_btn:hover,
    .share_btn:hover {
      background-color: #000;
      color: #fff;
    }
}

`;

function MyPage() {


    const navigate = useNavigate();

    const [myinvitation, setMyinvitation] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("uploadedDataIds");
        if (storedData) {
            setMyinvitation(JSON.parse(storedData));
        }
    }, []);

    // console.log(myinvitation[0]);

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            alert("링크가 복사되었습니다.");
        }).catch(err => {
            console.error('링크 복사 실패:', err);
        });
    };


    return (
        <>

            <GlobalStyle></GlobalStyle>
            <MyPageContainer>
                <MyPageContent>
                    <MyPageTitle>마이페이지</MyPageTitle>

                    <br></br>
                    <Bar></Bar>
                    <br></br>

                    {myinvitation.length === 0 ? (
                        <p>데이터 없음</p>
                    ) : (
                        myinvitation.map((invitation, index) => (
                            <MyCardBox key={index}>
                                <div className="mycard-wrap-1">
                                    <span>{index + 1}.</span>
                                    <img src={`${process.env.PUBLIC_URL}/img/mypage-img.png`} alt="나의 청첩장" />
                                    <p>나의 청첩장</p>
                                </div>

                                <div className="mycard-wrap-1">
                                    <span className="move_btn" onClick={() => { navigate(`/view/${invitation}`) }}>이동하기</span>
                                    <span className="share_btn" onClick={() => { handleCopyLink(`${window.location.origin}/view/${invitation}`) }}>링크복사</span>
                                </div>
                            </MyCardBox>
                        ))
                    )}



                </MyPageContent>
            </MyPageContainer>
        </>
    );
}

export default MyPage;
