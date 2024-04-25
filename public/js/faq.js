// JavaScript để thêm hoặc loại bỏ lớp highlight cho phần tương ứng
function highlightSection(sectionId) {
    // Loại bỏ lớp highlighted từ tất cả các phần trước khi thêm nó vào phần được chọn
    var sections = document.querySelectorAll('.detail_faq');
    sections.forEach(function(section) {
        section.classList.remove('highlighted');
    });

    // Thêm lớp highlighted cho phần được chuyển đến
    var section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('highlighted');
    }
}

function scrollToTop() {
    // Cuộn trang đến đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var gotop = document.getElementById('gotop');
    if (window.pageYOffset > 100) { // Hiển thị nút khi cuộn xuống dưới 100px
        gotop.style.display = 'block';
    } else {
        gotop.style.display = 'none';
    }
});
