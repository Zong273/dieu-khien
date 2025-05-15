function sendStep(path, inputId) {
  const value = parseInt(document.getElementById(inputId).value);

  if (isNaN(value) || value < 0 || value > 1500) {
    alert("Giá trị hợp lệ là từ 0 đến 1500.");
    return;
  }

  firebase.database().ref("/" + path).set(value)
    .then(() => {
      document.getElementById("status").textContent = `✅ Đã gửi lệnh đến ${path}: ${value}`;
    })
    .catch((error) => {
      console.error("❌ Lỗi:", error);
      document.getElementById("status").textContent = "❌ Gửi thất bại.";
    });
}
