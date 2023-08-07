// const data =[
//     {
//         name: 'Blog 1'
//     },
//     {
//         name: 'Blog 2'
//     },
// ]

// // get template
// const foodTemplate = document
//   .querySelector("#food-template")
//   .cloneNode(true).content;

// // get list
// const foodList = document.querySelector(".foods__list");

// const render = () => {
//   data.forEach((food) => {
    // const foodElement = foodTemplate.cloneNode(true);
    // // fill the template with data
//     foodElement.querySelector(".foods__item-name").textContent = food.name;

//     foodList.appendChild(foodElement);
//   });
// };

// render();

// document.getElementsByClassName("my-nice-class").style[0] = "max-width: 40%;max-height: 40%;"

function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
