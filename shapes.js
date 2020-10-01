$(document).ready(function(){
    animateLeft($(".a"), 50000);
    animateLeft($(".b"), 35000);
    animateLeft($(".c"), 45000);
//    animateLeft($(".shark"), 40000);
//    animateTest($(".e"));
    
function animateRight(targetElement){
    $(targetElement).css({right:'-50px'});
    $(targetElement).animate(
    
    );
};
    
//    Hiding the explanation
    $(".kika").hide();
    $(".shark-text").hide();
    $(".taxonomy").hide();
    $(".zeitgeist").hide();

//    Showing the explanation
    $(".a").mouseover(function(){
        $(".kika").show();
    });
    $(".a").mouseout(function(){
        $(".kika").hide();
    });
    
    $(".b").mouseover(function(){
        $(".zeitgeist").show();
    });
    $(".b").mouseout(function(){
        $(".zeitgeist").hide();
    });
    
    $(".c").mouseover(function(){
        $(".taxonomy").show();
    });
    $(".c").mouseout(function(){
        $(".taxonomy").hide();
    });
    
    $(".shark").mouseover(function(){
        $(".shark-text").show().css("transition: height 40s;");
        
    });
    $(".shark").mouseout(function(){
        $(".shark-text").hide().css("transition: height 40s;");
    });
    
    
    
});

//function animateRight(targetElement, speed){
//    $(targetElement).css({right:'-50px'});
//    $(targetElement).animate(
//        {
//        'right': $(document).width() + 100
//        }, 
//        { 
//        duration: speed, 
//        complete: function(){
//            animateRight(this, speed);}
//        }
//    );
//};

function animateLeft(targetElement, speed){
    $(targetElement).css({left:'-50px'});
    $(targetElement).animate(
        {
        'left': $(document).width() + 100
        }, 
        { 
        duration: speed, 
        complete: function(){
            animateLeft(this, speed);}
        }
    );
};