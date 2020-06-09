function loading() {
  window.onload = svgAnimation;

  function svgAnimation() {
    const spinner = document.getElementById("js-opening");
    spinner.classList.add("is-end");
  }
}

export { loading };
