var $,
    Backbone,
    _,
    React,
    App = {};

require.config({
    baseUrl: '/app',
    //urlArgs: "bust=" + (new Date()).getTime(),
    paths: {

        ext: "../ext/js/ext",
        templates: "templates",

        jquery: "../ext/js/jquery/jquery-1.11.1",
        underscore: "../ext/js/underscore/underscore",
        backbone: "../ext/js/backbone/backbone",
        jsx: "../ext/js/jsx/jsx",
        JSXTransformer: "../ext/js/react/JSXTransformer",
        react: "../ext/js/react/react",
        reactbackbone: "../ext/js/backbone/react.backbone"
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        }
    }
});

require(['router', 'jquery', 'backbone', 'underscore', 'react'], function (Router, jquery, backbone, underscore, react) {

    $ = jquery;
    Backbone = backbone;
    _ = underscore;
    React = react;

    App.router = new Router();
});