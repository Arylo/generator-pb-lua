'use strict';

module.exports = function (gulp, config, $, args) {

	gulp.task('default', ['clean'], function () {
		return gulp.start('build');
	});

};
