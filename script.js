
// code by itz_pa1


// form password check

function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirm-password").value;
    console.log(password, confirm - password);
    let message = document.getElementById("message");
    if (password.length != 0) {
        if (password == confirmpassword) {
            message.textContent = "Password match";
            message.style.color = "#00FF00"
        } else {
            message.textContent = "Password does not match";
            message.style.color = "#FF0000";
        }
    }
    else {
        alert("All details are compulsory. Please fill all details.");
        message.textContent = "";
    }
}


// nav click change 

function showSignUp() {
    var signUP = document.querySelector('.formBox');
    if (signUP.style.display === "none") {
        signUP.style.display = "block";
        document.querySelector("form").reset();
    } else {
        signUP.style.display = "none";
    }
    // signUP.style.display = signUP.style.display === 'none' ? '' : 'none';
}


// nav bar show 

function navShow() {

    var xmark = `<i class="fa-solid fa-xmark"></i>`;
    var bars = `<i class="fa-solid fa-bars"></i>`;
    var navBar = document.querySelector('nav span');

    if (navBar.innerHTML === bars) {
        navBar.innerHTML = xmark;

    } else {
        navBar.innerHTML = bars;
    }
}

