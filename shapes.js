// $(document).ready(function(){
//     animateLeft($(".a"), 50000);
//     animateLeft($(".b"), 35000);
//     animateLeft($(".c"), 45000);
// //    animateLeft($(".shark"), 40000);
// //    animateTest($(".e"));
    
// function animateRight(targetElement){
//     $(targetElement).css({right:'-50px'});
//     $(targetElement).animate(
    
//     );
// };
    
// //    Hiding the explanation
//     $(".kika").hide();
//     $(".shark-text").hide();
//     $(".taxonomy").hide();
//     $(".zeitgeist").hide();

// //    Showing the explanation
//     $(".a").mouseover(function(){
//         $(".kika").show();
//     });
//     $(".a").mouseout(function(){
//         $(".kika").hide();
//     });
    
//     $(".b").mouseover(function(){
//         $(".zeitgeist").show();
//     });
//     $(".b").mouseout(function(){
//         $(".zeitgeist").hide();
//     });
    
//     $(".c").mouseover(function(){
//         $(".taxonomy").show();
//     });
//     $(".c").mouseout(function(){
//         $(".taxonomy").hide();
//     });
    
//     $(".shark").mouseover(function(){
//         $(".shark-text").show().css("transition: height 40s;");
        
//     });
//     $(".shark").mouseout(function(){
//         $(".shark-text").hide().css("transition: height 40s;");
//     });
    
    
    
// });

function animateRight(targetElement, speed){
   $(targetElement).css({right:'-50px'});
   $(targetElement).animate(
       {
       'right': $(document).width() + 100
       }, 
       { 
       duration: speed, 
       complete: function(){
           animateRight(this, speed);}
       }
   );
};

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

var shapes = document.querySelectorAll('.shape');

for (var i = 0; i < shapes.length; i++) {
  shapes[i].onclick = toggleAnimation;
  shapes[i].style.webkitAnimationPlayState = 'running';
}

function toggleAnimation() {
  var style;
  for (var i = 0; i < shapes.length; i++) {
    style = shapes[i].style;
    if (style.webkitAnimationPlayState === 'running') {
      style.webkitAnimationPlayState = 'paused';
    //   document.body.className = 'paused';
    } else {
      style.webkitAnimationPlayState = 'running';
    //   document.body.className = '';
    }
  }
}


function pageTransition() {
    var tl = gsap.timeline();
    console.log('page');

    // tl.to('div.kika', {
    //     duration: 3,
    //     left: 0,
    // });
    tl.to('#triangle-link', {
        duration: 3,
        x: $(document).width() / 2,
        y: $(document).height() / 2,
        scale: 2,
    });
    tl.to('#triangle-link svg', {duration: 3, scale: 2,});
    // tl.to('ul.transition li', {duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.2});
    // tl.to('.content', {duration: 0.5, opacity: 0})
    // tl.to('ul.transition li', {duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.1, delay: 0.1});

}

function contentAnimation() {
    var tl = gsap.timeline();
    console.log('content');

    tl.from('.topnav', {duration: 1.5, translateY: 50, opacity: 0})
    tl.from('.content', {duration: 1.5, opacity: 0}, "-=1.1")
    // tl.to('img', {duration: 1.5, translateY: 50, opacity: 0})
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();

            console.log('leave');
            console.log(data)

            pageTransition();
            await delay(1500);
            done();
        },

        async enter(data) {
            console.log('enter');
            console.log(data)

            contentAnimation();
        },

        async once(data) {
            console.log('once');
            console.log(data)

            contentAnimation();
        }
    }]
})