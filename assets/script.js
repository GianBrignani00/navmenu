document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav");
    const expandir = document.querySelector("#btnPrincipal");
    

    expandir.addEventListener("click", function () {
        if (nav.style.width === "150px") {
            nav.style.width = "350px";

        } else {
            nav.style.width = "150px";

        }
    });
});