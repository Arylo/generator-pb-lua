'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var moment = require('moment');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Pandorabox PB Module ' + chalk.red('') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'Module Name?',
      defalut: this.appname
    }, {
      type: 'input',
      name: 'author',
      message: 'Author?'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.moduleName = this.props.moduleName.toLowerCase()
        .replace(/(^|[\s-_ ]+)\w/g, function (word) {
          word = word.toUpperCase();
          return word;
        }).replace(/[\s-_ ]/g, '_');
      this.props.pkgName = this.props.moduleName.toLowerCase();

      this.props.nowDate = moment().format('YYYY-MM-DD');
      this.props.nowYear = moment().format('YYYY');

      this.props.cYear = "<%= cYear %>";
      this.props.Version = "<%= Version %>";
      this.props.VersionNum = "<%= VersionNum %>";

      done();
    }.bind(this));
  },

  writing: function () {
    //
    this.fs.copy(
      this.templatePath('*.*'),
      this.destinationPath('./')
    );
    this.fs.copy(
      this.templatePath('gulp'),
      this.destinationPath('./gulp/')
    );
    this.fs.copy(
      this.templatePath('jenkins'),
      this.destinationPath('./jenkins/')
    );
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('./src/')
    );
    this.fs.copy(
      this.templatePath('static-files'),
      this.destinationPath('./static-files/')
    );
    // Git
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('./.gitignore')
    );
    this.fs.copy(
      this.templatePath('_git'),
      this.destinationPath('./.git')
    );
    //
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('./README.md'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('CHANGELOG.md'),
      this.destinationPath('./CHANGELOG.md'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('./package.json'), this.props
    );
    this.fs.copyTpl(
      this.templatePath('static-files/Makefile'),
      this.destinationPath('./static-files/Makefile'), this.props
    );
    // Test Unit Files
    this.fs.copy(
      this.templatePath('test/README.md'),
      this.destinationPath('./test/README.md')
    );
    this.fs.copyTpl(
      this.templatePath('test/units/module.spec.coffee'),
      this.destinationPath('./test/units/' + this.props.pkgName + '.spec.coffee'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('test/e2e/module.spec.coffee'),
      this.destinationPath('./test/e2e/' + this.props.pkgName + '.spec.coffee'),
      this.props
    );
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
