document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();
            
            // Redirect to the next page (replace 'naver_map.html' with the actual URL)
            window.location.href = '/naver_map';  // 수정된 부분
        });
    }
});