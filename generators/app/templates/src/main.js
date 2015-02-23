'use strict';

var BootState    = require('./states/Boot')
  , PreloadState = require('./states/Preload')
  , TitleState   = require('./states/Title')
  // <% STATE_REQUIRE_TOKEN %>
  // Leave the above token in place to enable automatic
  // injection of new states by the generator.
  ;

var game
  , width      = 1200
  , height     = 800
  , renderMode = Phaser.AUTO;

game = new Phaser.Game(width, height, renderMode, '');
game.state.add('boot',    BootState);
game.state.add('preload', PreloadState);
game.state.add('title',   TitleState);
// <% STATE_ADD_TOKEN %>
// Leave the above token in place to enable automatic
// injection of new states by the generator.

game.state.start('boot');
