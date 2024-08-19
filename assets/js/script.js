window.onload = function () {
  // Tìm phần tử loading và overlay
  var loadingElement = document.querySelector(".lds-ripple");
  var overlayElement = document.querySelector(".overlay");
  // Ẩn phần tử loading và overlay
  if (loadingElement) {
    loadingElement.style.display = "none";
  }
  if (overlayElement) {
    overlayElement.classList.add("hidden");
  }
};
