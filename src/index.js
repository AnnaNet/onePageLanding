import $ from 'jquery';
import 'bootstrap';

$(document).ready(function addMainPict() {
  let mainPict = document.getElementById("head");
  mainPict.style.backgroundImage = "url('./dist/images/head.png')";

  let logo = document.getElementById("logo");
  logo.style.backgroundImage = "url('./dist/images/logo.png')";
});
