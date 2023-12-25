document.addEventListener('DOMContentLoaded', function () {
    const reservationButton = document.getElementById('reservationButton');
    if (reservationButton) {
        reservationButton.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = '/map'; // 이동하고자 하는 URL 경로
        });
    }
});
