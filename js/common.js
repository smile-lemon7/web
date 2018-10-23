document.write("<script language='javascript' src='https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous'></script>");
//nav-bar
$('#navbar>li>a').click(function(){
  $('.nav-collapse').collapse()
})
if( window.innerWidth < 768 ) {
  $('#collapseNav').addClass('collapse')
  $('.nav>li').css('borderTop','1px solid #fff');
  $('.arrow').css("left","-1%");
  $('.arrowR').css("left","97%");
}else {
  $('#collapseNav').addClass('collapse in')
}

$(window).scroll(function() {
  var topHeight = $(window).scrollTop();
  if( topHeight >= 80 ) {
    $('.bg').css("backgroundColor","#1296db")
  }else {
    $('.bg').css("backgroundColor","rgba(0,0,0,.2)")
  }
})
