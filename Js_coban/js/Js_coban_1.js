/** Mô hình 3 khối
 * khối 1 : input
 * lấy 3 số nguyên được nhập vào từ form
 *
 *
 * khối 2: các bước xử lí
 * sau khi lấy dữ liệu từ form đã nhập thì lưu vào biến và ép kiểu dữ liệu qua số nguyên
 * nếu dữ liệu để trống khi nhập vào hoặc nhập kí tự thì khi click button sẽ thông báo lỗi
 * nếu số đã nhập đúng thì viết điều kiện trường hợp để sắp xếp , có 6 trường hợp được sắp xếp theo thứ tự tăng dần :
 * + 1 : (c >= b && b >= a) => a < b < c
 * + 2 : (c >= a && a >= b) => b < a < c
 * + 3 : (a >= b && b >= c) => c < b < a
 * + 4 : (a >= c && c >= b) => b < c < a
 * + 5 : (c >= a) => a < c < b
 * + 6 : trường hợp còn lại là : c < a < b
 *
 * tạo biến để chưa kết quả in ra màn hình
 *
 * note: ở trường hợp 2 là ngược lại trường hợp 5 nên chỉ cần ghi một điều kiện
 *
 * khối 3 : output
 * sắp xếp 3 số theo thứ tự tăng dần
 */

function arrange() {
  var a = parseInt(document.getElementById("arrange1").value);
  var b = parseInt(document.getElementById("arrange2").value);
  var c = parseInt(document.getElementById("arrange3").value);

  var ketQuaSapXep = document.getElementById("txtArr");

  if (!a || !b || !c) {
    alert("nhập đủ 3 số trước khi sắp xếp");
    return;
  }
  if (c >= b && b >= a) {
    ketQuaSapXep.innerHTML = a + " < " + b + " < " + c;
  } else if (c >= a && a >= b) {
    ketQuaSapXep.innerHTML = b + " < " + a + " < " + c;
  } else if (a >= b && b >= c) {
    ketQuaSapXep.innerHTML = c + " < " + b + " < " + a;
  } else if (a >= c && c >= b) {
    ketQuaSapXep.innerHTML = b + " < " + c + " < " + a;
  } else if (c >= a) {
    ketQuaSapXep.innerHTML = a + " < " + c + " < " + b;
  } else {
    ketQuaSapXep.innerHTML = c + " < " + a + " < " + b;
  }
}
document.getElementById("btnArr").onclick = arrange;
