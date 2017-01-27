$([IPython.events]).on('notebook_loaded.Notebook', function(){
    $('#header').hide();
    IPython.keyboard_manager.command_shortcuts.add_shortcut('ctrl-;', function (event) {
        if (IPython.notebook.mode == 'command') {
            $('#header').toggle();
            return false;
        }
        return true;
    });

    IPython.keyboard_manager.command_shortcuts.add_shortcut('ctrl-.', function (event) {
        if (IPython.notebook.mode == 'command') {
            $('#header').show();
            $('#header-container').toggle();
            $('#maintoolbar').toggle();
            return false;
        }
        return true;
    });

});
