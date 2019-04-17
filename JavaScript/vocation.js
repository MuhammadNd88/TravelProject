/**
 * Author: Muhammad Nadeem
 * Date: Feb. 2, 2019
 * Vocation page contain some image animation and image gallary. 
to use it?
 */
// vocation JS file
//========================================================= show year=========================================

var showYear = document.getElementById("year");
var showYear = new Date();
document.getElementById("year").innerHTML = showYear.getFullYear();

//============================Display Month==================================================================

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

var showMonth = document.getElementById("month");
var showMonth = new Date();
document.getElementById("month").innerHTML = months[showMonth.getMonth()];

// =========================================================display day==============================================
var showDay = document.getElementById("day");
var showDay = new Date();
document.getElementById("day").innerHTML = showDay.getDate();

// =====================main Area==========================================================================================

var divAdvert = document.getElementById("divAdvert");
divAdvert.style.position = "absolute";

divAdvert.style.left = "100px";
divAdvert.style.top = "100px";
function doThisLater() {
  var divAdvert = document.getElementById("divAdvert");
  divAdvert.style.position = "absolute";

  divAdvert.style.left = "100px";
  divAdvert.style.top = "100px";
  alert("timeup");
}

function displayTime() {
  console.log(new Date());
}

var date1 = setInterval(displayTime, 1000);

var cat = document.getElementById("cat");

var walkForward = true;
function catWalk() {
  if (cat.offsetLeft >= document.body.offsetWidth - cat.offsetWidth) {
    walkForward = false;
  }

  if (cat.offsetLeft <= 0) {
    walkForward = true;
  }
  if (walkForward) {
    cat.style.transform = "scaleX(1)";
    cat.style.left = cat.offsetLeft + 1 + "px";
  } else {
    cat.style.transform = "scaleX(-1)";
    cat.style.left = cat.offsetLeft - 1 + "px";
  }
}
var carTimer = setInterval(catWalk, 1);

//=================================================================================image section=======================================================================//
var pageBody = document.getElementsByTagName("div")[5];
var newImg = document.createElement("img");
newImg.src = "../Images/img1.jpg ";
newImg.style.border = "1px solid black";
newImg.style.backgroundRepeat = "no-repeat";
newImg.style.backgroundSize = "cover";
newImg.style.width = "200px";
newImg.style.height = "200px";
newImg.style.marginRight = "10px";
pageBody.appendChild(newImg);

var pageBody = document.getElementsByTagName("div")[5];
var newImg = document.createElement("img");
newImg.src = "../Images/img1.jpg ";
newImg.style.border = "1px solid black";
newImg.style.backgroundRepeat = "no-repeat";
newImg.style.backgroundSize = "cover";
newImg.style.width = "200px";
newImg.style.height = "200px";
newImg.style.marginRight = "10px";
pageBody.appendChild(newImg);

var pageBody = document.getElementsByTagName("div")[5];
var newImg = document.createElement("img");
newImg.src = "../Images/img1.jpg ";
newImg.style.border = "1px solid black";
newImg.style.backgroundRepeat = "no-repeat";
newImg.style.backgroundSize = "cover";
newImg.style.width = "200px";
newImg.style.height = "200px";
newImg.style.marginRight = "10px";
pageBody.appendChild(newImg);

var pageBody = document.getElementsByTagName("div")[5];
var newImg = document.createElement("img");
newImg.src = "../Images/img1.jpg";
newImg.style.border = "1px solid black";
newImg.style.backgroundRepeat = "no-repeat";
newImg.style.backgroundSize = "cover";
newImg.style.width = "200px";
newImg.style.marginRight = "10px";
newImg.style.height = "200px";
pageBody.appendChild(newImg);
