window.onload = () => {
  document.getElementById("start").onclick = () => {
    let canvasEl = document.getElementById("canvasHidden");
    let menuEl = document.querySelector(".menu_container");
    menuEl.classList.add("menu_container_hidden");
    menuEl.classList.remove("menu_container");

    canvasEl.removeAttribute("id", "canvasHidden");
    canvasEl.setAttribute("id", "canvas");

    Game.init();
  };
};
