$(function () {
    
    var navItems = $('.nav-item');

    console.log(navItems.length);

    for (let i = 0; i < navItems.length; i++) {
        var el = navItems[i];
        el = $(el);

        el.on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

});