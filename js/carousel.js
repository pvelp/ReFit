(function ($) {
    let SlideSpeed = 700;
    let TimeOut = 10000;
    $(document).ready(function(e) {
        $(".slide").css(
            {"position" : "absolute",
                "top":'0', "left": '0'}).hide().eq(0).show();
        let slideNum = 0;
        let slideTime;
        let slideCount = $(".slider-content .slide").size();
        let animSlide = function(arrow){
            clearTimeout(slideTime);
            $(".slide").eq(slideNum).fadeOut(SlideSpeed);
            if(arrow === "next"){
                if(slideNum === (slideCount-1)){slideNum=0;}
                else{slideNum++}
            }
            else if(arrow === "prew")
            {
                if(slideNum === 0){slideNum=slideCount-1;}
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
            $('.control-slide.active').removeClass("active");
            $('.control-slide').eq(slideNum).addClass('active');
        }
        let $adderSpan = '';
        $('.slide').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
        $('<div class ="slider-controls">' + $adderSpan +'</div>').appendTo('.slider');
        $(".control-slide:first").addClass("active");
        $('.control-slide').click(function(){
            let goToNum = parseFloat($(this).text());
            animSlide(goToNum);
        });
        let pause = false;
        let rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
        }
        $('.slide > div h2').hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = false; rotator();
            });
        rotator();
    });
})(jQuery);



