// menangkap event scroll
window.addEventListener("scroll", muncul);

// fungsi untuk memberikan efek elemen muncul ketika scroll
function muncul() {
  // menangkap setiap tag dengan class elemen
  let elements = document.querySelectorAll(".elemen");
  //perulangan untuk setiap tag dengan class elemen
  for (let i = 0; i < elements.length; i++) {
    //   mengambil ukuran tinggi layar
    let tinggiLayar = window.innerHeight;
    //menangkap ukuran elemen dan posisinya relatif terhadap viewport
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    // menentukan ukuran scroll untuk memunculkan elemen
    let ukuranScroll = 150;
    // jika jarak atas elemen kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class tampil di setiap tag dengan class elemen
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    }
    // jika tidak maka hapus class tampil
    else {
      elements[i].classList.remove("tampil");
    }
  }
}

// -------------------------- navbar --------------------------

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 800 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// untuk transparansi
$(document).ready(function(){
  $(window).bind("scroll", function(){
    var gap = 50;
    if($(window).scrollTop() > gap){
      $("nav").addClass("active");
    } else{
      $("nav").removeClass("active");
    }
  });
});
