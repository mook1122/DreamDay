import React, { useEffect } from 'react';
const { kakao } = window;

const MapComponent = ({ x, y }) => {
    useEffect(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
            center: new kakao.maps.LatLng(y, x), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

        // 마커가 표시될 위치입니다 
        const markerPosition = new kakao.maps.LatLng(y, x); // y와 x의 순서를 맞춥니다

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }, [x, y]);

    return (
        <div id="map" style={{ width: '100%', height: '300px' }}></div>
    );
};

export default MapComponent;
