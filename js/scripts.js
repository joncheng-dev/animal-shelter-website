// User Interface Logic
window.onload = function () {
  let lightModeButton = document.querySelector("#button-light-mode");
  lightModeButton.onclick = function () {
    document.querySelector("body").style.backgroundColor = "#1cd24c3d";
  };

  let darkModeButton = document.querySelector("#button-dark-mode");
  darkModeButton.onclick = function () {
    document.querySelector("body").style.backgroundColor = "purple";
  };

  let defaultFontSizeButton = document.querySelector("#button-default-font-size");
  defaultFontSizeButton.onclick = function () {
    document.querySelector("body").style.fontSize = "initial";
  };

  let largeFontSizeButton = document.querySelector("#button-large-font-size");
  largeFontSizeButton.onclick = function () {
    document.querySelector("body").style.fontSize = "larger";
  };
};
