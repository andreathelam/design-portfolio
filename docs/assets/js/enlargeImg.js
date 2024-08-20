function enlargeImg(popup, src) {

    document.getElementById("imgsrc").src = src

    popup.style.display = "flex";

    //document.getElementsByTagName("body").style.overflow = "hidden";

    //document.getElementById("test_body").style.overflow = "hidden";

    document.documentElement.style.overflow = "hidden"
}

function closeImg(popup) {
    popup.style.display = "none";

    document.documentElement.style.overflow = "auto"
}