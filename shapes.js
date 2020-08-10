$(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height();
    var w = $(window).width();
    
    var nh = Math.floor(Math.random() * h-200);
    var nw = Math.floor(Math.random() * w-200);
    
    return [nh,nw];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 20000,   function(){
      animateDiv(myclass);        
    });
    
};