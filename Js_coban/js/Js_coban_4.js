/**Mô hình 3 khối
 *
 * khối 1 : input
 * 3 cạnh của tam giác được lấy từ form
 *
 * khối 2 : các bước xử lí
 * -sau khi các cạnh được nhập vào thì kiểm tra các cạnh có đủ điều kiện để tạo nên 1 tam giác không : điều kiện tạo nên 1 tam giác (tổng của 2 cạnh bất kì luôn lớn hơn cạnh thứ 3)
 * + nếu điều kiện đủ để tạo nên 1 tam giác , sẽ lồng điều kiện vào bên trong để kiểm tra các trường hợp đặc biệt : tam giác cân, tam giác đều , tam giác vuông ..
 * ngược lại nếu điều kiện các cạnh không đủ thì sẽ trả kết quả không tạo nên tam giác
 *
 *
 * khối 3: output
 * kết quả đây là tam giác gì
 *
 */

function tamGiac() {
  var takeedge1 = parseInt(document.getElementById("edge1").value);
  var takeedge2 = parseInt(document.getElementById("edge2").value);
  var takeedge3 = parseInt(document.getElementById("edge3").value);

  var ketQuaTamGiac = document.getElementById("txtTriangle");
  if (
    takeedge1 + takeedge2 > takeedge3 &&
    takeedge2 + takeedge3 > takeedge1 &&
    takeedge1 + takeedge3 > takeedge2
  ) {
    if (takeedge1 == takeedge2 && takeedge2 == takeedge3) {
      // console.log("tam giac deu");
      ketQuaTamGiac.innerHTML = "Đây là một tam giác đều";
    } else if (
      takeedge1 == takeedge2 ||
      takeedge2 == takeedge3 ||
      takeedge1 == takeedge3
    ) {
      // console.log("tam giac can");
      ketQuaTamGiac.innerHTML = "Đây là một tam giác cân";
    } else if (
      takeedge1 ** 2 == takeedge2 ** 2 + takeedge3 ** 2 ||
      takeedge2 ** 2 == takeedge1 ** 2 + takeedge3 ** 2 ||
      takeedge3 ** 2 == takeedge2 ** 2 + takeedge1 ** 2
    ) {
      // console.log("tam giac vuong");
      ketQuaTamGiac.innerHTML = "Đây là một tam giác vuông";
    } else {
      // console.log("tam giac binh thuong");
      ketQuaTamGiac.innerHTML = "Đây là một tam giác bình thường";
    }
  } else {
    // console.log("khong phai tam giac");
    ketQuaTamGiac.innerHTML =
      "Chiều dài các cạnh không thể tạo thành một tam giác !";
  }
}
document.getElementById("btnTriangle").onclick = tamGiac;
