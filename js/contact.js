const $form = document.querySelector("#form");

function tesNomorHP(phone) {
  if (!phone || !/^08[1-9][0-9]{7,10}$/.test(phone)) {
    return false;
  }
  return true;
}

function ValidateEmail(mail) {
  if (!mail || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return false;
  }
  return true;
}

$form.addEventListener("submit", (e) => {
  e.preventDefault(); //agar tidak merefresh atau reset

  const name = document.getElementById("name").value;
  if (name === "") {
    Swal.fire("ERROR", "Nama tidak boleh kosong!", "error");
    return;
  }

  const email = document.getElementById("email").value;
  const validateEmail = ValidateEmail(email);
  if (!validateEmail) {
    Swal.fire("ERROR", "Email tidak valid  !", "error");
    return;
  }

  const pnumber = document.getElementById("pnumber").value;
  const isValidPhone = tesNomorHP(pnumber);
  if (!isValidPhone) {
    Swal.fire("ERROR", "Nomor tidak valid", "error");
    return;
  }

  const subject = document.getElementById("subject").value;
  if (subject === "") {
    Swal.fire("ERROR", "Subject tidak boleh kosong!", "error");
    return;
  }

  const message = document.getElementById("message").value;
  if (message === "") {
    Swal.fire("ERROR", "Message tidak boleh kosong!", "error");
    return;
  }

  let emailReceiver = "sipul.ysf@gmail.com";
  let a = document.createElement('a');
  a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silahkan kontak saya di nomor ${pnumber}, Terima Kasih.`;
  a.click();

});

// Email.send({
//   SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
//   To : 'sipul.ysf@gmail.com',
//   From : "you@isp.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// );