requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min',
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require(
    [
        'model',
        'jquery',
        'tmpl',
        'view',
        'controller'
    ],
    
    function (model, $, tmpl, view, controller) {

    }
);