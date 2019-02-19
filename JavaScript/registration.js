/**
 * Author: Muhammad Nadeem
 * Date: Feb. 2, 2019
 * Registration page contain form takes some information from user and submit to a php file.
 */
// Registration JS file
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
