location.href = '#';


// const navLinks = document.getElementById('navlinks');

// function toggleFun() {
//     document.getElementById('navlinks').classList.toggle('show');
// }

// window.onclick = function(e) {
//     if(!e.target.matches('#navlinks')) {
//         document.getElementById('navlinks').classList.toggle('unshow');
//     }
// }

function callContactUs() {
    location.href = "#contactUs";
}

// Image Slider using javascript

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    // if your n (slideIndex) is become grater than Slides array length than set slideIndex to 1.
    if (n > 4) {
        slideIndex = 1;
    }

    // if your n (slideIndex) is become negative then set it to slides length
    if (n < 1) {
        slideIndex = 4;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // slides[slideIndex-2].style.display = "block";    
    slides[slideIndex-1].style.display = "block";    
    slides[slideIndex].style.display = "block";      
}


// lazy loading service images / course images

document.addEventListener("DOMContentLoaded", function () {
    let lazyloadImages;

    lazyloadImages = document.querySelectorAll(".lazy-load");

    let imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let image = entry.target;
                image.src = image.dataset.src;
                image.classList.remove("lazy-load");
                imageObserver.unobserve(image);
            }
        });
    });

    lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
    });

})

// Event listener for submit button

document.querySelector("#myForm").addEventListener("submit", function (e) { 
    e.preventDefault(); // Prevent the form from submitting
    sendMsg(e); // sendMsg() will be called when the form is submitted
});

// Regular expression for validation  

const nameRegex = /^[A-Za-z]{1,}$/;
const emailRegex = /^[a-zA-Z0-9]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/;

// ^+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$
const contactRegex = /^[0-9]{10}$/;

const orig_name_ip = document.getElementById("nameIp");
const orig_email_ip = document.getElementById("emailIp");
const orig_contact_ip = document.getElementById("contactIp");
const orig_message_ip = document.getElementById("msgIp");


// Function for client query

function sendMsg(e) {
    let flag = true;

    const name = document.getElementById("nameIp").value.replace(/\s+/g, '').trim();;
    const email = document.getElementById("emailIp").value;
    const contact = document.getElementById("contactIp").value;
    const message = document.getElementById("msgIp").value.trim();
    console.log(message);

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('contactError').innerHTML = "";
    document.getElementById('messageError').innerHTML = "";

    document.getElementById("nameIp").style = orig_name_ip.value;
    document.getElementById("emailIp").style = orig_email_ip.value;
    document.getElementById("contactIp").style = orig_contact_ip.value;
    document.getElementById("msgIp").style = orig_message_ip.value;

    if(flag) {
        if(name=='') {
            document.getElementById("nameError").innerHTML = "Please enter name";
            document.getElementById("nameIp").style.border = "1px solid red";
            flag = false;
        }

        if(email=='') {
            document.getElementById("emailError").innerHTML = "Please enter email";
            document.getElementById("emailIp").style.border = "1px solid red";
            flag = false;
        }

        if(contact=='') {
            document.getElementById('contactError').innerHTML = "Please enter contact number";
            document.getElementById("contactIp").style.border = "1px solid red";
            flag = false;
        }

        if(message=='') {
            console.log(message=='');
            document.getElementById("messageError").innerHTML = "Please enter message";
            document.getElementById("msgIp").style.border = "1px solid red";
            flag = false;
        }

        // if(!flag) {
        //     return;
        // }
    }


    if (!nameRegex.test(name) && name != '') {
        document.getElementById("nameError").innerHTML = "Please enter a valid name.";
        document.getElementById("nameIp").style.border = "1px solid red";
        flag = false;
    }

    if (!emailRegex.test(email) && email != '') {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        document.getElementById("emailIp").style.border = "1px solid red";
        flag = false;
    }

    if (!contactRegex.test(contact) && contact != '') {
        document.getElementById('contactError').innerHTML = "Please enter a valid contact number.";
        document.getElementById("contactIp").style.border = "1px solid red";
        flag = false;
    }

    // If all inputs are valid then toast message will be displayed
    if (flag) {
        const toastTrigger = document.getElementById('liveToastBtn');
        const toastLiveExample = document.getElementById('liveToast');
       
        if (toastTrigger) {
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            document.getElementById("myForm").reset();
        }
    }
}

// Functions for redirecting to different courses

function toHtml() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/html/default.asp'")) {
        window.open('https://www.w3schools.com/html/default.asp');
    }
}

function toCss() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/css/default.asp'")) {
        window.open('https://www.w3schools.com/css/default.asp');
    }
}

function toJava() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/java/default.asp'")) {
        window.open('https://www.w3schools.com/java/default.asp');
    }
}

function toCsharp() {
    if(confirm("You will be redirect to 'https://learn.microsoft.com/en-us/dotnet/csharp/'")) {
        window.open('https://learn.microsoft.com/en-us/dotnet/csharp/');
    }
}

function toReact() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/react/'")) {
        window.open('https://www.w3schools.com/react/');
    }
}

function toPython() {
    if(confirm("You will be redirect to 'https://www.w3schools.com/python/'")) {
        window.open('https://www.w3schools.com/python/');
    }
}

// When clicking outside menu button it will close menu

var navitems = document.getElementById('navitems'),
menuBtn = document.getElementById('manuBtn'),
navlinks = document.getElementById('navlinks').childNodes;

let menuStatus = false;

function hide_menu(evt) {

    evt = evt || window.event;						  // get window.event if evt is falsy (IE)
    var targetElement = evt.target || evt.srcElement; // get srcElement if target is falsy (IE)

    if((targetElement === menuBtn || targetElement === menuBtn.parentElement) && (menuStatus === true)) {
        navitems.style.display = 'none';
        menuStatus = false;
        return;
    }
    
    // || targetElement === navlinks[1] || targetElement === navlinks[3] || navlinks[5] || navlinks[7]
    if(targetElement === menuBtn || targetElement === menuBtn.parentElement) {
        navitems.style.display = 'block';
        menuStatus = true
    } else {
        navitems.style.display = 'none';
        menuStatus = false;
    }
}

document.addEventListener('click', hide_menu, false);