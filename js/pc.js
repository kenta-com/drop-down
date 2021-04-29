$(function(){
  $('.dropdwn__list').hover(function(){
    $("ul:not(:animated)", this).slideDown();
}, function(){
    $("ul.dropdwn-menu",this).slideUp();
});
});