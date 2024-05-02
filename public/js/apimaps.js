function initMap() {
    // Tạo một bản đồ mới
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 }, // Tham số ban đầu cho trung tâm của bản đồ
        zoom: 15, // Mức độ phóng to của bản đồ
    });

    // Lấy vị trí hiện tại của người dùng và hiển thị lên bản đồ
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // Di chuyển trung tâm của bản đồ đến vị trí hiện tại của người dùng
            map.setCenter(pos);
            // Thêm marker cho vị trí hiện tại của người dùng
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: "You are here!"
            });
        }, function() {
            // Xử lý trường hợp không thể lấy được vị trí của người dùng
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Trình duyệt không hỗ trợ Geolocation
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    // Xử lý lỗi khi không thể lấy được vị trí của người dùng
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                            "Error: The Geolocation service failed." :
                            "Error: Your browser doesn't support geolocation.");
    infoWindow.open(map);
}
