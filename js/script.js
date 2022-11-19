{
    const themeToggle = () => {
        const body = document.querySelector(".js-body")
        const themeName = document.querySelector(".js-themeName")
        body.classList.toggle("body--lightTheme");
        themeName.innerText = body.classList.contains("body--lightTheme") ? "ciemny" : "jasny";
    }
    const init = () => {
        const themeButton = document.querySelector(".js-themeButton")
        themeButton.addEventListener("click", themeToggle)
    }
    init();
}