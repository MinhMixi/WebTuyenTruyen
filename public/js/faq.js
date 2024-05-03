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
