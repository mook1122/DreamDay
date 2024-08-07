import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;

height: 85%;
margin-top: 15px;

@media(max-width:1100px) {


}

`;

export const SampleModalBox = styled.div.withConfig({
  shouldForwardProp: (prop) => !['preview'].includes(prop),
})`
height: 100%;

.close_sample_modal {
  position: absolute;
  color: white;
  top: 10px;
  right: 25px;
  font-size: 25px;
  /* display: none; */
}



@media(max-width:1100px) {

  width: 100%;
  height: 100%;
  z-index: 2000;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(56, 44, 48, .84); 
  transition: .5s opacity;

  padding: 20px;

  display: ${props => (props.preview === 'on' ? 'flex' : 'none')};
  /* display: none; */
  justify-content: center;
  align-items: center;

  


}

`;

export const Sample = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bg'].includes(prop),
})`
/* margin: 20px; */
height: 100%;
width: 450px;
border-radius: 10px;
background-color: ${props => props.bg};
padding: 30px;
text-align: center;
position:relative;

overflow: scroll;

  /* Hide scrollbar for WebKit-based browsers (e.g., Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;  /* Firefox */

  @media(max-width:1100px) {

    /* display:none; */
    /* position:absolute; */
    z-index:1000;
    margin:0px;

}


`;

export const Selector = styled.div`

    margin: 20px;
    height: 100%;
    width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: scroll;

  /* Hide scrollbar for WebKit-based browsers (e.g., Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;  /* Firefox */


    > div {
        width: 100%;
    }

    @media(max-width:1100px) {

      width: 100%;

}


`;

export const SampleHeader = styled.div`

`;

export const MainImgBox = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    max-height: 450px;
  }

  div {
    width: 100%;
    height: 300px;
    border: 1px solid black;
    background-color: #eee;
    opacity: 0.5;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export const SampleTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => !['titlecolor'].includes(prop),
})`

color: ${props => props.titlecolor};

* {
  font-family: "Nanum Myeongjo", serif;
  font-weight: 400;
  font-style: normal;
}

.en_title {
    font-size: 12px;
}

.kr_title {
    font-weight:bold;
    font-size:18px;
}
`;

export const HeaderDate = styled.p`
    font-size: 30px;
    font-family: "Crimson Pro", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;


`;

export const HeaderInfo = styled.div`

* {
    /* font-family: 'gowun Dodum", sans-serif'; */
    font-style: normal;
}

.header_info_name {
    font-weight: 600;
    font-size: 18px;
}

.header_info_location {
    color: #888888;
    font-size: 15px;
}

`;

export const SampleContent = styled.p`
    white-space: pre-line;
    line-height: 2;
    font-size: 14px;

    color: #585858;
`;

export const UnderBar = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
> div {
    width: 70px;
    border-bottom: 1px solid #eee;
}

`;

export const FamilyBox = styled.div`

    color: #777777;
    font-size: 15px;
    line-height: 1.5;

.family_name {
    font-size: 16px;
    color: #444444;
}
`;

export const CalendarDate = styled.p`
    font-size: 22px;
    color: #544f4f;
    /* font-family: 'gowun Dodum", sans-serif'; */
`;
export const CalendarTime = styled.p`
    font-size: 15px;
    color: #544f4f;
    margin-top: 10px;
    /* font-family: 'gowun Dodum", sans-serif'; */
    
`;

export const MapContainer = styled.div`
width: 100%;
    height: 300px;
    margin-top: 10px;
    display: ${props => (props.show === 'on' ? 'block' : 'none')};
`;

export const LocationContainer = styled.div`

   * {
    /* font-family: 'gowun Dodum", sans-serif'; */
   }

   line-height: 1.5;
   color: #888888;

   .location_hall {
    font-size: 17px;
    color: #000000;
    font-weight: bold;
   }

   .location_tel {
    font-size: 14px;
   }

`;

export const TelBox = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;

> div {
width: 150px;
height: 50px;

display: flex;
justify-content: center;
align-items: center;

border-radius: 20px;
background-color: #888888;
color: white;
cursor: pointer;
position: absolute;

}

`;

export const Copyright = styled.p`

font-size: 10px;
color: black;

`;
