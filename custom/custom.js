define(['base/js/events'], function(events) {
  events.on('app_initialized.NotebookApp', function () {
    $('#header-container').toggle();
    $('.header-bar').toggle();
    $('div#maintoolbar').toggle();
    $('#site').prepend($("#header").detach());
    events.trigger('resize-header.Page');
  });
});

