$(document).ready(function(){
    //to animate
    animateDiv(".a");
    animateDiv(".b");
    animateDiv(".c");
    animateDiv(".d");
    
    //to grow
    $(".d").click(function(){
        $(".d").toggleClass("big");
    });
    
    $(".big").click(function(){
        $(".big").toggleClass("d");
        $(".big").addClass("d");
        $(".d").removeClass("big");
        
    });
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10900,   function(){
      animateDiv(myclass);        
    });
    
};