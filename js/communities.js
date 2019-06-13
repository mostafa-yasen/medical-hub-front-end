$(function () {
    var COMMUNITY = null;

    // to show community name in modal
    $('#subscribe').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        COMMUNITY = button.data('community');
        
        var modal = $(this)
        modal.find('.modal-community-name').text(COMMUNITY)
      })

    $('#confirm-subscribe').on('click', function (event) {
        $('#diabites-card').find('.subscribe-btn').removeClass('btn-outline-danger').addClass("btn-secondary btn-disabled").attr('disabled', 'true');
        $('#subscribe').modal('hide');
    });    

});