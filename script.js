$(document).ready(function() {
    $(window).scroll(function(){
        $(".nav-item").removeClass("active");
        $(".active").parent().addClass("active");
      });
    
});