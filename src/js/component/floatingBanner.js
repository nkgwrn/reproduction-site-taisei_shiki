function floatingBanner() {
  const float = document.getElementById("js-floating");
  var timeoutId;

  window.addEventListener("scroll", function () {
    float.classList.add("is-active");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      float.classList.remove("is-active");
    }, 500);
  });
}

export { floatingBanner };
