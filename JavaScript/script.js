// main JS file
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

var pageBody = document.getElementsByTagName("main")[0];
var newParagraph = document.createElement("h1");

var paragraphText = document.createTextNode("Welcome");
newParagraph.appendChild(paragraphText);
pageBody.appendChild(newParagraph);

var pageBody = document.getElementsByTagName("main")[0];
var newParagraph = document.createElement("p");

var paragraphText = document.createTextNode(
  "Transat Distribution Canada is Canada's leading retail distributor of holiday travel, with some 500 outlets. The network, which is associated with Transat A.T. Inc., includes the Transat Travel, Marlin Travel, Club Voyages, TravelPlus, Voyages en Liberté brands, as well as other affiliate members. Transat Distribution Canada is a business unit of Transat A.T. Inc., one of the largest integrated tourism companies in the world, committed to sustainable development and recognized as a Travelife Partner."
);
newParagraph.appendChild(paragraphText);
pageBody.appendChild(newParagraph);
