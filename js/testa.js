var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  counter.style.top = 400 + y * .97 + "px";

  counter.innerHTML = y + "px";

  if (y > 200000) {
    counter.style.backgroundColor = "green";
  }else{
    counter.style.backgroundColor = "blue";}

    icon.style.top = 200 + y  + "px";

  if(y > 200000){

      icon.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";

  }else{

  icon.src="https://1.bp.blogspot.com/-jnt2C7f2HH8/WSGIun5uhGI/AAAAAAAAK6s/A1R4fUrtMUsQtEbKqopa2xTWqaEtxClogCLcB/s1600/256___come-to-fight-emoji.png";
 }

};
