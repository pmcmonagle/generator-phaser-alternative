'use strict';

var generators = require('yeoman-generator')
  , util       = require('util')
  , path       = require('path')
  , chalk      = require('chalk')
  , foldername = path.basename(process.cwd());

module.exports = generators.Base.extend({
    init: function () {
        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    info: function () {
        this.log(this.yeoman);
        this.log(chalk.magenta('Alternative Phaser Generator'));
    },

    runPrompt: function () {
        var done    = this.async()
          , prompts = [
            {
                type:    'input',
                name:    'projectName',
                message: 'What is the title of your project?',
                default: foldername
            }
        ];

        this.prompt(prompts, function (properties) {
            this.projectName = properties.projectName || ' ';
            done();
        }.bind(this));
    },

    generate: function () {
        this.mkdir('assets');
        this.mkdir('assets/images');
        this.mkdir('assets/sounds');
        this.mkdir('dist');
        this.mkdir('tests');
        this.mkdir('src');
        this.mkdir('src/components');
        this.mkdir('src/prefabs');
        this.mkdir('src/states');
        this.mkdir('src/systems');

        this.copy('gitignore', '.gitignore');
        this.copy('jshintrc', '.jshintrc');
        this.template('_README.md', 'README.md');
        this.template('_package.json', 'package.json');

        this.copy('assets/images/example.png', 'assets/images/example.png');
        this.copy('assets/images/preloadSprite.png', 'assets/images/preloadSprite.png');

        this.template('src/index.html', 'src/index.html');
        this.copy('src/main.js', 'src/main.js');
        this.copy('src/states/boot.js', 'src/states/boot.js');
        this.copy('src/states/preload.js', 'src/states/preload.js');
        this.copy('src/states/title.js', 'src/states/title.js');
    }
});
