define(['base/js/events'], function(events) {
  events.on('app_initialized.NotebookApp', function () {
    console.log('custom.js: hiding header and toolbar');
    $('#header-container').toggle();
    $('.header-bar').toggle();
    $('div#maintoolbar').toggle();
    events.trigger('resize-header.Page');
  });
});

