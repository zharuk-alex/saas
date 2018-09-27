$(function () {
  $('#fixedContainerModal').on('click', '.btn', function (e) {
    $('#fixedContainerModal').modal('hide');
  }).on('show.bs.modal', function () {
    $('.fixed-container').fadeOut(300);
  }).on('hide.bs.modal', function () {
    $('.fixed-container').fadeIn(300);
  });

  // $('#fixedCallToActionBtn').on('click',  function (e) {
  //   console.log(e);
  //   $(this).animate({
  //     width: '100px'
  //   },200);
  // })
  // fixedContainerModal
  // $('#show_dialog').on('click',  function (e) {
  //   e.preventDefault();
  //   console.log(e);
  //   $('#fixedContainerModal').modal('show');
  // })
  // $('#show_dialog2').popover({
  //   placement: 'left',
  //
  // })
  $('[data-toggle="popover"]').popover({
    html: true,
    trigger: 'click',
    content: '<div class="d-flex flex-column align-items-center pt-0"><a class="btn btn-filled waves-effect waves-light btn-presentation">Презентация<i class="fa fa-download ml-2" aria-hidden="true"></i></a><div class="my-2"></div><a class="btn btn-filled waves-effect waves-light btn-consultation" data-toggle="modal" data-target="#contactModal" data-backdrop="true">Консультация<i class="fa fa-comments-o ml-2" aria-hidden="true"></i></a></div>'
  });
  $('body').on('click','.popover .btn',function (e) {
    $(this).closest('.popover').popover('hide');
    $('#show_dialog').find('i').removeClass('popover-show').addClass('popover-hide');
  });

  $('#show_dialog').on('click',  function (e) {
    $(this).find('i').toggleClass('popover-show');
    $(this).find('i').toggleClass('popover-hide');
  })
})
