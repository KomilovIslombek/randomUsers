const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modeLocal = window.localStorage.getItem("mode")

if(modeLocal) {
    body.classList.add("dark-mode")
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
}

const toggleModeBtn = (storageName) => {
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark-mode")
    localStorage.setItem("mode", storageName);
}

darkBtn.addEventListener("click", () => {
    toggleModeBtn("dark-mode");
});

lightBtn.addEventListener("click", () => {
    toggleModeBtn("");
});