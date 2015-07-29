'use strict';

function Boot() {
    // Empty
}

Boot.prototype = {

    preload: function () {
        this.load.image('preloadSprite', 'assets/images/preloadSprite.png');
    },

    create: function () {
        this.game.input.maxPointers = 1;

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.setMinMax(120, 80, 1200, 800);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically   = true;
        this.game.scale.refresh();

        this.game.state.start('preload');
    }
};

module.exports = Boot;
