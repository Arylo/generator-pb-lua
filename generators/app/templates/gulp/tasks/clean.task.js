'use strict';

module.exports = function (gulp, config, $, args) {

	gulp.task('clean', function () {
		var paths = (function () {
			var arr = [];

			config.target.forEach(function (item) {
				arr.push(item);
			});

			return arr;
		})();
		paths.push(config.test.target);
		return gulp.src(paths)
			.pipe($.clean({ force : true }));
	});

};
