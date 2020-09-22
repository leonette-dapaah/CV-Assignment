
var first = localStorage.getItem('first');
var middle = localStorage.getItem('middle');
var last = localStorage.getItem('last');
var gender = localStorage.getItem('gender');
var phone = localStorage.getItem('phone');
var email = localStorage.getItem('email');
var address = localStorage.getItem('address');
var name = first + " " + middle + " " + last;


document.getElementById("name").innerHTML = name;

document.getElementById("gender").innerHTML = gender;

document.getElementById("number").innerHTML = phone;

document.getElementById("email").innerHTML = email;

document.getElementById("address").innerHTML = address;