function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//This is for the typed about me section.
var i = 0;
var txt =
  "I'm a 29-year-old Front-End web developer based out of Charlotte NC. I like to build things that'll inspire someone to do that same.";
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
