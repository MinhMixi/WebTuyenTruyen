function search() {
    var keyword = document.getElementById("search-input").value;
    var encodedKeyword = encodeURIComponent(keyword);
    window.location.href = "TimKiem.html?keyword=" + encodedKeyword;
    return false; // Ngăn chặn gửi biểu mẫu
}
