/**Mô hình 3 khối:
 * khối 1 : input
 * - lấy giá trị và lưu vào biến  được nhập từ form
 * -
 *
 *
 * khối 2 :các bước xử lí
 * - dữ liệu được nhập vào thì được ép kiểu số nguyên , nếu người dùng nhập kí tự hoặc thiếu số sẽ thông báo lỗi
 * - nếu như dữ liệu nhập đúng
 * + taoj 1 hàm truyền vào tham số để kiểm tra số đó là chẵn hay lẻ : nếu như số nhập vào chia hết cho 2 thì đó là số chẵn , ngược lại là số lẻ
 * - tạo 2 biến đếm để cộng dồn số lẻ hay chẵn
 * - xuất kết quả ra màn hình
 *
 *
 *
 * khối 3: output
 * - đếm số lẻ và số chẵn
 */

function isOdd(n) {
  return n % 2 !== 0;
}

function chanLe() {
  var takeOddEven1 = parseInt(document.getElementById("evenodd1").value);
  var takeOddEven2 = parseInt(document.getElementById("evenodd2").value);
  var takeOddEven3 = parseInt(document.getElementById("evenodd3").value);

  if (!takeOddEven1 || !takeOddEven2 || !takeOddEven3) {
    alert("Chưa nhập đủ số");
    return;
  }
  var countOdd = 0;
  var countEven = 0;

  if (isOdd(takeOddEven1)) {
    countOdd++;
  } else {
    countEven++;
  }

  if (isOdd(takeOddEven2)) {
    countOdd++;
  } else {
    countEven++;
  }

  if (isOdd(takeOddEven3)) {
    countOdd++;
  } else {
    countEven++;
  }

  console.log("Co ", countEven, " so chan");
  console.log("Co ", countOdd, " so le");

  document.getElementById("txtEvenOdd").innerHTML =
    "có " + countEven + " số chẵn " + " và " + countOdd + " số lẻ ";
}

document.getElementById("btnEvenOdd").onclick = chanLe;
