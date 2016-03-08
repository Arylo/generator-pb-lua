'use strict';

module.exports = function (gulp, config, $, args) {

	gulp.task('test', ['toDev'], function () {
		gulp.start('test:mocha');
	});

	gulp.task('test:mocha', function () {
		var testFilename = '*';

		if (args.u && args.u.length > 0) {
			testFilename = args.u;
		}

		require('coffee-script/register');
		return gulp.src(config.test.path + '{units,e2e}/' + testFilename + '.spec.{js,coffee}')
			.pipe($.mocha({
				reporter : 'progress',
			}))
	});
};
