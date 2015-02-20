# generator-phaser-alternative
An alternative Phaser generator for Yeoman; done the way I like it.


## Installation
Install yeoman globally as you normally would:
```
$ npm install -g yo
```

Next, install this generator:
```
$ npm install -g generator-phaser-alternative
```

Run the generator in any empty directory to scaffold your game!
Dependencies will be automatically installed after scaffolding.
```
$ mkdir MyGame
$ cd MyGame
$ yo phaser-alternative
```


## Building and Running
This generator favors npm build scripts and browserify over other
build tools such as gulp or grunt.

To start a dev server, watch the source files and live-reload on changes:
```
$ npm start
```

To test and lint:
```
$ npm run lint
$ npm run test
```

To build the project into the dist folder:
```
$ npm run build
```


## Coming "soon" (planned features)
* Sub-generators for States, Prefabs, etc.
* A better method of including Phaser (it doesn't play nice with browserify at the moment)
* The ability to select different Phaser releases (standard, no-lib, ninja physics)
