import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const printTextButton = document.getElementById("my_button");
  printTextButton.addEventListener("click", function () {
    const text = document.getElementById("app");
    console.log(text);
  });
}
