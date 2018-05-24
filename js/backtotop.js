// When the user scrolls down 120px from the top of the document, show the button
window.onscroll = function() {

     var y = window.pageYOffset;
     console.log(y);


    if (document.body.scrollTop > 25000 || document.documentElement.scrollTop > 25000) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }


     counter.style.top = 400 + y * .97 + "px";
     counter.innerHTML = y + "px";
};


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
