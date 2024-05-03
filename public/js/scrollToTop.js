function scrollToTop() {
    // Cuộn trang đến đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var gotop = document.getElementById('gotop');
    if (window.pageYOffset > 350) { // Hiển thị nút khi cuộn xuống dưới 100px
        gotop.style.display = 'block';
    } else {
        gotop.style.display = 'none';
    }
});