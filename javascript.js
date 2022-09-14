console.log("script is running....")


window.onscroll = function () { scrollFunction() };

function scrollFunction() {


    if (document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.opacity = "100";
    } else {
        document.getElementById("myBtn").style.opacity = "0";
    }

}

function topFunction() {
    document.documentElement.scrollTop = 0;
}