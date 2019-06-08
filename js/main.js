$(window).on('load', function() {

    // To Set Header Height.
    setHeaderHeight();
    $(window).on('resize', function() {
        setHeaderHeight();
    });

    // To Start Type Writer Effect.
    setTypedEffect('#header .typed', ["",
    "Welcome to <span>medicalhub</span>",
    "we are a large <span>medical community</span>",
    "We connect patients to doctors in a smart way",
    "to achieve <span>most benifit</span>."
   ]);
    
   

   });

var setTypedEffect = function(el, strings) {
    typedHeader = new Typed(el, {
        strings: strings,
        typeSpeed: 50,
        showCursor: false,
        backDelay: 1800,
        loop: true
    });
}

var setHeaderHeight = function () {
    const myWindowHeight = $(window).innerHeight(),
        navbarHeight = $('#navbar').innerHeight();

    $('#header').css('height', myWindowHeight - navbarHeight + 'px');
}