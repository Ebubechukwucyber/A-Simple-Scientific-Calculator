let $light = document.getElementById("lightMode");
let $dark = document.getElementById("darkMode");

$light.addEventListener("click", lightMode);
$dark.addEventListener("click", darkMode);
function darkMode(e) {
    if (e.target = true) {
        document.getElementById("css").href = "darkmode.css";
        $dark.style.display = "none";
        $light.style.display = "block";
        localStorage.setItem("theme", e);
    }
}
function lightMode(e) {
    if (e.target = true) {
        document.getElementById("css").href = "style.css";
        $dark.style.display = "block";
        $light.style.display = "none";
        localStorage.removeItem("theme");
    }
}
var themeMode = localStorage.getItem("theme");
if (themeMode == null) {
    lightMode();
} else {
    darkMode(themeMode);
}