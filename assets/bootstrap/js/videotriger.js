$(window).scroll(function() {
 
    //will trigger when your element comes into viewport
        var hT = $('ytvideo1').offset().top,
        hH = $('ytvideo1').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    
    
    
    if (wS > (hT+hH-wH)){
        //appends &autoplay=1 to iFrame src, making it autoplay
        var videoUrl = $('ytvideo1').attr('src');
        $('ytvideo1').attr('src', videoUrl + "&autoplay=1");
    }