function toggle () {
    let menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }

}



var currentImg = "h";

function imgchange () {
    var image = document.getElementById("img-hammenu");
    if (currentImg == "h") {
        image.src = "/images/icon-close.svg";
        currentImg = "c";
    }
    else {
        image.src = "/images/icon-hamburger.svg";
        currentImg = "h";
    }
}


document.getElementById("mobile-menu").addEventListener("click",toggle);

