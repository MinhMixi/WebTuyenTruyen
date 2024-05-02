// function search() {
//     var keyword = document.getElementById("search-input").value;
//     var encodedKeyword = encodeURIComponent(keyword);
//     window.location.href = "TimKiem.html?keyword=" + encodedKeyword;
//     return false; // Ngăn chặn gửi biểu mẫu
// }

function searchAndHighlight() {
    var keyword = document.getElementById("search-input").value;
    var searchText = new RegExp(keyword, "gi");

    var contentElement = document.getElementById("content");
    var contentHTML = contentElement.innerHTML;
    var matches = contentHTML.match(searchText);
    if (matches) {
        // Xóa các lớp 'highlighted' trước khi làm mới
        contentElement.innerHTML = contentHTML.replace(/<span class="highlighted">(.*?)<\/span>/g, '$1');

        // Tìm và làm nổi bật tất cả các trùng khớp của từ khóa tìm kiếm
        contentElement.innerHTML = contentElement.innerHTML.replace(searchText, '<span class="highlighted">$&</span>');

        // Cuộn đến từ khóa tìm kiếm đầu tiên
        var firstMatch = document.querySelector('.highlighted');
        if (firstMatch) {
            firstMatch.scrollIntoView();
        }
    }
}

// Thêm sự kiện click cho nút tìm kiếm
document.getElementById("search-button").addEventListener("click", searchAndHighlight);

// Thêm sự kiện keypress cho ô nhập văn bản để xử lý khi người dùng nhấn Enter
document.getElementById("search-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchAndHighlight();
    }
});