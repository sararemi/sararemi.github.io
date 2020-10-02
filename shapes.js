let termDescriptionIsPopulated = false;

/**
 * Add any other projects here 
 */
const terms = {
    kika: {
        title: 'Kika',
        text: 'The bouba/kiki effect is a non-arbitrary mapping between speech sounds and the visual shape of objects. This effect was first observed by German-American psychologist Wolfgang K\u00f6hler in 1929.[1] In psychological experiments first conducted on the island of Tenerife (where the primary language is Spanish), K\u00f6hler showed forms similar to those shown at the right and asked participants which shape was called "takete" and which was called "baluba" ("maluma" in the 1947 version).'
    },
    taxonomy: {
        title: 'Taxonomy',
        text: 'The bouba/kiki effect is a non-arbitrary mapping between speech sounds and the visual shape of objects. This effect was first observed by German-American psychologist Wolfgang K\u00f6hler in 1929.[1] In psychological experiments first conducted on the island of Tenerife (where the primary language is Spanish), K\u00f6hler showed forms similar to those shown at the right and asked participants which shape was called "takete" and which was called "baluba" ("maluma" in the 1947 version).'
    },
    zeitgeist: {
        title: 'Zeitgeist',
        text: 'The bouba/kiki effect is a non-arbitrary mapping between speech sounds and the visual shape of objects. This effect was first observed by German-American psychologist Wolfgang K\u00f6hler in 1929.[1] In psychological experiments first conducted on the island of Tenerife (where the primary language is Spanish), K\u00f6hler showed forms similar to those shown at the right and asked participants which shape was called "takete" and which was called "baluba" ("maluma" in the 1947 version).',
    },
    shark: {
        title: 'Shark',
        text: 'The bouba/kiki effect is a non-arbitrary mapping between speech sounds and the visual shape of objects. This effect was first observed by German-American psychologist Wolfgang K\u00f6hler in 1929.[1] In psychological experiments first conducted on the island of Tenerife (where the primary language is Spanish), K\u00f6hler showed forms similar to those shown at the right and asked participants which shape was called "takete" and which was called "baluba" ("maluma" in the 1947 version).',
    },
}

$(document).ready(function() {
    animateLeft($(".a"), 50000);
    animateLeft($(".b"), 35000);
    animateLeft($(".c"), 45000);
    animateLeft($(".shark"), 40000);
    
    $(".a").click(function(){
        $(".term-description").toggleClass('animate');

        if (termDescriptionIsPopulated) {
            cleanupTermDescriptionDiv();
        } else {
            populateTermDescriptionDiv('kika');
        }
    });

    $(".b").click(function(){
        $(".term-description").toggleClass('animate');
        if (termDescriptionIsPopulated) {
            cleanupTermDescriptionDiv();
        } else {
            populateTermDescriptionDiv('zeitgeist');
        }
    });

    $(".c").click(function(){
        $(".term-description").toggleClass('animate');
        if (termDescriptionIsPopulated) {
            cleanupTermDescriptionDiv();
        } else {
            populateTermDescriptionDiv('taxonomy');
        }
    });

    
    $(".shark").mouseover(function(){
        $(".shark-text").show().css("transition: height 40s;");
        
    });
    $(".shark").mouseout(function(){
        $(".shark-text").hide().css("transition: height 40s;");
    });
     
});


/**
 * This removes the text and title elements from the termDiv
 * Essentially "resetting" the state for repopulating with a different project
 */
function cleanupTermDescriptionDiv() {
    const termDiv = document.querySelector('.term-description');
    const childElements = termDiv.querySelectorAll('.term-content');
    if (childElements) {
        childElements.forEach((element) => {
            termDiv.removeChild(element);
        });
    }
    termDescriptionIsPopulated = false;
}

/**
 * This populates the termDiv with a project mapped from the `terms` object
 * defined at the top of the file. 
 * Passing a string, ie `kika` will access the text and title values for that project
 * and create a `h2` element and a `p` element and populate it with those values
 * @param {String} term 
 */
function populateTermDescriptionDiv(term) {
    const titleElement = document.createElement("h2");
    titleElement.classList.add('term-content');
    const titleContent = document.createTextNode(terms[term].title);
    titleElement.appendChild(titleContent);   

    const textElement = document.createElement("p");
    textElement.classList.add('term-content');
    const textContent = document.createTextNode(terms[term].text);
    textElement.appendChild(textContent);

    const termDiv = document.querySelector('.term-description');
    termDiv.appendChild(titleElement);
    termDiv.appendChild(textElement);

    termDescriptionIsPopulated = true;
}

function hideTermDiv() {
    $('.term-description').toggleClass('animate');
    cleanupTermDescriptionDiv();
}


function animateLeft(targetElement, speed){
    $(targetElement).css({left:'-100px'});
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