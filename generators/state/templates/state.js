'use strict';

function <%= _.classify(name) %>() {
    // Constructor
}

<%= _.classify(name) %>.prototype = {

    init:     function () {},
    preload:  function () {},
    create:   function () {},
    update:   function () {},
    paused:   function () {},
    render:   function () {},
    shutdown: function () {}

};

module.exports = <%= _.classify(name) %>;
