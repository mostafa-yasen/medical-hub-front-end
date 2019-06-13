$(function () {
    var askedBtn = $('#askedQuestionsBtn');
    var answeredBtn = $('#answeredQuestionsBtn');
    var answeredArea = $('#answeredQuestions');
    var askedArea = $('#askedQuestions');

    askedBtn.on('click', function (e) {
        $(this).addClass('bg-info text-light');
        answeredBtn.removeClass('bg-info text-light')

        askedArea.show();
        answeredArea.hide();
    });

    answeredBtn.on('click', function (e) {
        $(this).addClass('bg-info text-light');
        askedBtn.removeClass('bg-info text-light')

        answeredArea.show();
        askedArea.hide();
    });

});