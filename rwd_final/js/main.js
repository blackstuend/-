$(document).ready(function() {
    $('.open_menu').on('click',  function(e){
       e.preventDefault();
       $('.top_menu > ul').toggleClass('show_menu');
   });
 });