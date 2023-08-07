const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
  e.preventDefault(); //agar tidak merefresh atau reset

  const name = document.getElementById("namepro").value;
  if (name === "") {
    Swal.fire("ERROR", "Nama Project tidak boleh kosong!", "error");
    return;
  }

  const datestart1 = document.getElementById("datestart").value;
  if (datestart1 === "") {
    Swal.fire("ERROR", "Tanggal tidak boleh kosong!", "error");
    return;
  }

  const dateend = document.getElementById("dateend").value;
  if (dateend === "") {
    Swal.fire("ERROR", "Tanggal tidak boleh kosong!", "error");
    return;
  }

  if (moment(datestart1) > moment(dateend)) {
    Swal.fire("ERROR", "Tanggal tidak valid!", "error");
    return;
  }

  const description = document.getElementById("description").value;
  if (description === "") {
    Swal.fire("ERROR", "Deskripsi tidak boleh kosong!", "error");
    return;
  }

  const checks = document.querySelectorAll(".radio-item input");
  let hasChecked = false;
  checks.forEach((item) => {
    if (item.checked) {
      hasChecked = true;
    }
  });
  if (!hasChecked) {
    Swal.fire("ERROR", "Checkbox tidak boleh kosong!", "error");
    return;
  }

  const img = document.getElementById("actual-btn").files;
  if (img === "") {
    Swal.fire("ERROR", "Foto tidak boleh kosong!", "error");
    return;
  }

  let namespro = document.getElementById("namepro").value;
  let datestart = document.getElementById("datestart").value;
  let datestend = document.getElementById("dateend").value;
  let descript = document.getElementById("description").value;
  let checkbox = document.getElementsByName("check");

  let stacks = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      stacks.push(checkbox[i].value);
    }
  }

  let image = document.getElementById("actual-btn").files;

  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);

  let blog = {
    // id: Date.now(),
    image,
    namespro,
    datestart,
    datestend,
    descript,
    stacks,
    postAt: new Date(),
  };

  BlogStorage.push(blog);
  renderBlog();
});

let BlogStorage = [];
function renderBlog() {
  // let dataBlog = BlogStorage.getAll();

  document.querySelector(".blog-list").innerHTML = "";

  for (let index = 0; index < BlogStorage.length; index++) {
    let stacksString = "";
    BlogStorage[index].stacks.forEach((item) => {
      switch (item) {
        case "nodejs":
          stacksString += '<i class="fa-brands fa-node-js"></i>';
          break;
        case "nextjs":
          stacksString += '<i class="fa-solid fa-n"></i>';
          break;
        case "reactjs":
          stacksString += '<i class="fa-brands fa-react"></i>';
          break;
        case "typescript":
          stacksString += '<i class="fa-brands fa-stripe"></i>';
          break;
        default:
          stacksString += item;
          break;
      }
    });

    console.log(BlogStorage);

    document.querySelector(".blog-list").innerHTML += `
    <div class="blog-item">
    <div class="blog-image">
      <img src="${BlogStorage[index].image}" alt="blog_img" />
    </div>
    <div class="blog-content">
    <a class="blog-judul" href="/html/blog.html" target="_blank">
    ${BlogStorage[index].namespro} - ${getFullTime(BlogStorage[index].postAt)}
    </a>
    <p class="blog-durasi">Durasi : ${getDiffDays(
        moment(BlogStorage[index].datestart),
        moment(BlogStorage[index].datestend)
      )} hari
    </p>
    </div>
    <p class="blog-description">
      ${BlogStorage[index].descript}
    </p>
    <div class="blog-tech">
      ${stacksString}
    </div>
    <div class="btn-group">
      <button class="editpost">Edit</button>
      <button class="deletepost">Delete</button>
    </div>
  </div>
    `;
  }
}

function getDiffDays(startDateMoment, endDateMoment) {
  const diffDays = endDateMoment.diff(startDateMoment, "days");
  console.log(diffDays);
  return `${diffDays}`;
}

function getFullTime(time) {
  // console.log("get full time");
  // let time = new Date();
  // console.log(time);
  let year = time.getFullYear();
  return `${year}`;

  // let monthName = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];
  // // console.log(monthName[8]);

  // let date = time.getDate();
  // // console.log(date);

  // let monthIndex = time.getMonth();
  // // console.log(monthIndex);

  // let year = time.getFullYear();
  // // console.log(year);

  // let hours = time.getHours();
  // let minutes = time.getMinutes();
  // // console.log(minutes);

  // if (hours <= 9) {
  //   hours = "0" + hours;
  // } else if (minutes <= 9) {
  //   minutes = "0" + minutes;
  // }

  // return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

// function getDistanceTime(time) {
//   let timeNow = new Date();
//   let timePost = time;

//   // waktu sekarang - waktu post
//   let distance = timeNow - timePost; // hasilnya milidetik
//   console.log(distance);

//   let milisecond = 1000; // milisecond
//   let secondInHours = 3600; // 1 jam 3600 detik
//   let hoursInDays = 24; // 1 hari 24 jam

//   let distanceDay = Math.floor(
//     distance / (milisecond * secondInHours * hoursInDays)
//   ); // 1/86400000
//   let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
//   let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
//   let distanceSeconds = Math.floor(distance / milisecond); // 1/1000

//   return moment(timePost).fromNow();

//   // if (distanceDay > 0) {
//   //   return `${distanceDay} Day Ago`;
//   // } else if (distanceHours > 0) {
//   //   return `${distanceHours} Hours Ago`;
//   // } else if (distanceMinutes > 0) {
//   //   return `${distanceMinutes} Minutes Ago`;
//   // } else {
//   //   return `${distanceSeconds} Seconds Ago`;
//   // }
// }

// setInterval(function () {
//   renderBlog();
// }, 10000);

// const BlogStorage = {
//   getAll: () => {
//     return JSON.parse(localStorage.getItem("blogs")) || [];
//   },
//   add: (blog) => {
//     const blogs = BlogStorage.getAll();
//     blogs.push(blog);
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//   },
//   update: (id, updatedBlog) => {
//     const blogs = BlogStorage.getAll();

//     const index = blogs.findIndex((blog) => blog.id === id);
//     if (index < 0) return;

//     blogs[index] = updatedBlog;
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//   },
//   delete: (id) => {
//     const blogs = BlogStorage.getAll();
//     const index = blogs.findIndex((blog) => blog.id === id);
//     blogs.splice(index, 1);
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//   },
// };

// renderBlog();
