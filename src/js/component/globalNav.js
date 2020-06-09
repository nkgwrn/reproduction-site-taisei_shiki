function globalNav() {
  const toggle = document.getElementById("js-toggle");
  const globalNav = document.getElementById("js-globalNav");

  toggle.onclick = function () {
    toggle.classList.toggle("is-active");
    globalNav.classList.toggle("is-open");
  };
}

export { globalNav };
