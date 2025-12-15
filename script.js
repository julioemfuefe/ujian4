// LOGIN FUNCTION
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("login", "true");
    window.location.href = "home.html";
  } else {
    error.textContent = "Username atau password salah!";
  }
}

// CEK LOGIN SAAT DI HOME
if (window.location.pathname.includes("home.html")) {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "login.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("login");
  window.location.href = "login.html";
}

// UPLOAD GAMBAR
const uploadImage = document.getElementById("uploadImage");
const previewImage = document.getElementById("previewImage");

if (uploadImage) {
  uploadImage.addEventListener("change", function () {
    const file = uploadImage.files[0];
    if (file) {
      previewImage.src = URL.createObjectURL(file);
      previewImage.style.display = "block";
    }
  });
}
