const links = document.querySelectorAll(".nav-menu-item");

function getCurrentURL() {
  return window.location.href;
}

const url = getCurrentURL();
const arrayUrl = url.split("/");
const lastItem = arrayUrl[arrayUrl.length - 1];

switch (lastItem) {
  case "index.html":
    const homeElement = document.querySelector("#menu-home");
    homeElement.classList.add("active");
    break;

  case "myproject.html":
    const projectElement = document.querySelector("#menu-project");
    projectElement.classList.add("active");
    break;

  case "testimonial.html":
    const testiElement = document.querySelector("#menu-testimonials");
    testiElement.classList.add("active");
    break;

  case "blog.html":
    const blogElement = document.querySelector("#menu-blog");
    blogElement.classList.add("active");
    break;

  case "contact.html":
    const contactElement = document.getElementById("menu-contact");
    contactElement.classList.add("active");
    break;

  default: {
    const homeElement = document.querySelector("#menu-home");
    homeElement.classList.add("active");
  }
}

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav--menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};





// let hamburgerIsOpen = false;

// function openHamburger() {
//   let hamburgerNavContainer = document.getElementById(
//     "hamburger-nav-container"
//   );

//   // !hamburgerIsOpen > hamburgerIsOpen == false
//   // hamburgerIsOpen > hamburgerIsOpen == true
//   if (!hamburgerIsOpen) {
//     console.log(hamburgerIsOpen);
//     hamburgerNavContainer.style.display = "block";
//     hamburgerIsOpen = true;
//   } else {
//     console.log(hamburgerIsOpen);
//     hamburgerNavContainer.style.display = "none";
//     hamburgerIsOpen = false;
//   }
// }
