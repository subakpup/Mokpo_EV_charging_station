document.addEventListener('DOMContentLoaded', function() {
    const submitReservation = document.getElementById('submitReservation');
    submitReservation.addEventListener('click', function(event) {
        event.preventDefault();
        alert('예약이 완료되었습니다.');
        window.location.href = '/';
    });
});