// Elementi
const navbar = document.getElementById("topnav");
const mybutton = document.getElementById("myBtn");

let prevScrollPos = window.pageYOffset;

// SCROLL
window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  // Navbar: su = mostra, giù = nascondi
  if (prevScrollPos > currentScrollPos) {
    navbar.style.transform = "translateY(0)";
  } else {
    navbar.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;

  // Bottone "torna su"
  if (currentScrollPos > 20) {
    mybutton.classList.add("show");
    mybutton.classList.remove("hide");
  } else {
    mybutton.classList.add("hide");
    mybutton.classList.remove("show");
  }
});

// TORNA SU
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// MENU MOBILE
function myFunction() {
  navbar.classList.toggle("responsive");
}
