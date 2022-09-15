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
};

function validateForm() {

    let x = document.forms["news_letter"]["fname"].value;
    let y = document.forms["news_letter"]["phone"].value.length;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let z = document.forms["news_letter"]["email"].value.match(validRegex);


    if (x == "") {
        document.getElementById("fname").style.borderColor = "red";

    } else {
        document.getElementById("fname").style.borderColor = "transparent";
    };

    if (y != 8) {
        document.getElementById("phone").style.borderColor = "red";

    } else {
        document.getElementById("phone").style.borderColor = "transparent";
    }

    if (z == null) {
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById("email").style.borderColor = "transparent";
    }



}