'use strict';

function Preload() {
    this.preloadSprite = null;
    this.ready = false;

    this.assetsUri = {
        images: 'assets/images/',
        sounds: 'assets/sounds/'
    };
}

Preload.prototype = {

    preload: function () {
        this.preloadSprite = this.add.sprite(
            this.game.width  / 2,
            this.game.height / 2,
            'preloadSprite'
        );
        this.preloadSprite.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.preloadSprite);

        this.preloadImages();
        this.preloadSounds();
    },

    create: function () {
        this.preloadSprite.cropEnabled = false;
    },

    update: function () {
        if (!!this.ready) {
            this.game.state.start('title');
        }
    },

    onLoadComplete: function () {
        this.ready = true;
    },

    // -------------------
    // - Preload Methods -
    // -------------------

    preloadImages: function () {
        // Preload All Images!!!
        this.load.image('example', this.assetsUri.images + 'example.png');
    },

    preloadSounds: function () {
        // Preload All Sounds!!!
    }

};

module.exports = Preload;
