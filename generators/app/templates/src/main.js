'use strict';

var BootState    = require('./states/Boot')
  , PreloadState = require('./states/Preload')
  , TitleState   = require('./states/Title');

var game
  , width      = 1200
  , height     = 800
  , renderMode = Phaser.AUTO;

game = new Phaser.Game(width, height, renderMode, '');
game.state.add('boot',    BootState);
game.state.add('preload', PreloadState);
game.state.add('title',   TitleState);
game.state.start('boot');
