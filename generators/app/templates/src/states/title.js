'use strict';

function Title() {
    // Empty
}

Title.prototype = {

    create: function () {
        this.add.sprite(
            this.game.width  / 2,
            this.game.height / 2,
            'example'
        ).anchor.setTo(0.5, 0.5);
    }

};

module.exports = Title;
