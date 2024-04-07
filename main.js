window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbars = document.getElementsByClassName("navbar");
  for (var i = 0; i < navbars.length; i++) {
    var navbar = navbars[i];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-60px"; 
    }
  }
}

