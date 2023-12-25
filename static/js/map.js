var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(34.81197609, 126.3928559),
    zoom: 14
});

function readCSVFile() {
    fetch('/static/data/charger.csv') // CSV 파일 경로 설정
        .then(response => response.text())
        .then(data => {
            parseCSVData(data);
        });
}

function parseCSVData(data) {
    const rows = data.split('\n'); // 각 행을 분리

    // 헤더 행을 제외하고 데이터 처리
    for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].split(','); // 각 열을 분리

        const chargingStation = columns[0]; // 충전소명
        const chargerID = columns[1]; // 충전기ID
        const chargerType = columns[2]; // 충전기
        const address = columns[3]; // 주소
        const operatingHours = columns[4]; // 이용시간
        const latitude = parseFloat(columns[5]); // 위도
        const longitude = parseFloat(columns[6]); // 경도

        // 위에서 추출한 정보로 마커 생성
        const markerOptions = {
            position: new naver.maps.LatLng(longitude, latitude),
            map: map, // map 변수는 이미 생성된 지도 객체를 나타냅니다.
            title: chargingStation // 마커에 표시할 제목
            // 그 외에 마커에 관련된 다양한 설정을 추가할 수 있습니다.
        };

        // 마커 생성
        const marker = new naver.maps.Marker(markerOptions);

        const content = `
            <div class="info-content">
                <h3>${chargingStation}</h3>
                <p>충전기ID: ${chargerID}</p>
                <p>충전기: ${chargerType}</p>
                <p>주소: ${address}</p>
                <p>이용시간: ${operatingHours}</p>
            </div>
        `;

        // 마커 클릭 시 정보 창 열기
        attachInfoWindow(marker, content);
    }
}

// 각 마커에 정보 창을 연결하는 함수
function attachInfoWindow(marker, content) {
    // 정보 창 생성
    const infoWindow = new naver.maps.InfoWindow({
        content: content
    });
    const infoWindowContent = infoWindow.getContentElement();

    naver.maps.Event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.classList.add('close-button');
    closeBtn.onclick = function () {
        infoWindow.close();
    };
    infoWindowContent.appendChild(closeBtn);

    const reserveBtn = document.createElement('button');
    reserveBtn.textContent = '예약';
    reserveBtn.style.display = 'block'; // 버튼을 블록 레벨 요소로 표시하여 줄 바꿈이 일어나게 함
    reserveBtn.classList.add('reservation-button');
    reserveBtn.onclick = function () {
        window.location.href = '/reservation';
    };
    infoWindowContent.appendChild(reserveBtn);
}

readCSVFile();