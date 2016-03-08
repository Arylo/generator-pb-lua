'use strict';

module.exports = function (gulp, config, $, args) {

	var merge  = require('merge-stream');
	var moment = require('moment');

	var copyTpl = function (src) {
		return gulp.src(src)
			.pipe($.template({
				VersionNum : config.version_num,
				Version    : config.version,
				cYear      : moment().format('YYYY')
			}))
			.pipe($.wait(50))
			.pipe(gulp.dest(config.target[0]))
			.pipe(gulp.dest(config.target[1]));
	};

	gulp.task('build', function () {
		return merge(copyTpl(['static-files/**', '!**/README.md']),
			copyTpl(['src/**', '!**/README.md']));
	});

};
