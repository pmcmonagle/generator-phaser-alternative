'use strict';

var generators = require('yeoman-generator')
  , util       = require('util')
  , path       = require('path')
  , chalk      = require('chalk');

module.exports = generators.NamedBase.extend({
    generate: function () {
        this.template('state.js', 'src/states/'+ this._.slugify(this.name) +'.js');
    },

    runPrompt: function () {
        var done = this.async();

        this.prompt({
            type:    'confirm',
            name:    'inject',
            message: 'Do you want to inject the new state into main.js?\n' +
                     '(won\'t work if you\'ve deleted main.js or its tokens)',
            default: true
        }, function (response) {
            this.inject = response.inject;
            done();
        }.bind(this));
    },

    inject: function () {
        var main,
            slugName  = this._.slugify(this.name),
            className = this._.classify(this.name);

        if (!this.inject) {
            return;
        }

        try {
            main = this.readFileAsString('src/main.js');
        } catch (e) {
            this.log(chalk.yellow(
                'Warning: The new state could not be injected into main.js because it is missing.\n' +
                'This is fine; you just have to write the require(\'state\') code yourself.'
            ));
            return;
        }

        main = main.replace(
            '// <% STATE_REQUIRE_TOKEN %>',
            ', '+ className +' = require(\'./states/'+ className +'\')\n' +
            '  // <% STATE_REQUIRE_TOKEN %>'
        );

        main = main.replace(
            '// <% STATE_ADD_TOKEN %>',
            'game.state.add(\''+ slugName +'\', '+ className +');\n' +
            '// <% STATE_ADD_TOKEN %>'
        );

        this.writeFileFromString(main, 'src/main.js');
    }
});
