$(function () {
    $('#diagnoseRequest').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var userName = button.data('name');
        var modal = $(this)
        modal.find('.user-name').text(userName)
      })
});