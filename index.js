
const form = document.getElementById("addForm");

function onSubmit(event) {
    event.preventDefault(); 

    const first= form.elements["fname"].value;
    const mName= form.elements["mname"].value;
    const last = form.elements["lname"].value;
    const gender= form.elements["gender"].value;
    const tel = form.elements["number"].value;
    const email = form.elements["email"].value;
    const address = form.elements["address"].value;
  

    if (first == "") {
      document.getElementById("f").classList.style.borderColor = "red";
    }
    if (last === "") {
      document.getElementById("l").classList.style.borderColor = "red";
    }
    if (tel === "") {
      document.getElementById("p").classList.style.borderColor ="red";
    }
    if (email === "") {
        document.getElementById("e").classList.style.borderColor ="red";
    }

    if (address === "") {
    document.getElementById("a").classList.style.borderColor = "red";
    }

    localStorage.setItem("first",first);
    localStorage.setItem("middle",mName);
    localStorage.setItem("last",last);
    localStorage.setItem("gender",gender);
    localStorage.setItem("tel",tel);
    localStorage.setItem("email",email);
    localStorage.setItem("address",address);

    // button redirect to open cv.html
    window.location.replace('cv.html');
  }
  // attach function to the form "submit" event.
  form.addEventListener("submit",onSubmit)