import $ from 'jquery';
import 'bootstrap';

$(document).ready(function temp() {
  let el=document.getElementById("head");

  console.log ("I'm element id=head --> " + el);

  //el.style.background = 'red';
  el.style.backgroundImage = "url('./dist/images/head.png')";
});
