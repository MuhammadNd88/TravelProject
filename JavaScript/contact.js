/**
 * Author: Muhammad Nadeem
 * Date: Feb. 2, 2019
 * contact js has an array name and some dumy phone number used as agent data and name.
 */


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

// ======================================== contact us Section===========================================================

var arrayName = ["Jon", "Alex", "Maria", "Smith", "Simon"];
var pageBody = document.getElementsByTagName("div")[1];
var nameP = document.createElement("p");
pageBody.appendChild(nameP);

var newParagraph = document.getElementsByTagName("p")[0];
var paragraphText = document.createTextNode(arrayName + "  ");
newParagraph.appendChild(paragraphText);

var arrayName = [
  "123-456-7890",
  "123-456-7890",
  "123-456-7890",
  "123-456-7890",
  "123-456-7890"
];
var pageBody = document.getElementsByTagName("div")[1];
var nameP = document.createElement("p");
pageBody.appendChild(nameP);

var newParagraph = document.getElementsByTagName("p")[1];
var paragraphText = document.createTextNode(arrayName);
newParagraph.appendChild(paragraphText);
