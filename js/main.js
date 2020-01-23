$(document).ready(function () {

    let carousel = $('.carousel');
    carousel.carousel();
    setInterval(autoplay, 7500);

    window.onscroll = function () {
        scrollLock()
    };

    let header = document.getElementById("mainHeader"),
        sticky = header.offsetTop;
    function scrollLock() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    function autoplay() {
        carousel.carousel('next');
    }

});

