$(function () {

    // Handle like effect. 
    var likeBtns = $(".btn-like");
    for (let i = 0; i < likeBtns.length; i++) {
        const el = likeBtns[i];
        $(el).on('click', function (e) {
            $(this).toggleClass('active');
        });
    }

});