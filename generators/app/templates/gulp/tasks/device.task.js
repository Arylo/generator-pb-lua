'use strict';

var merge = require('merge-stream');

module.exports = function (gulp, config, $, args) {

	var sftpTpl = function (src, remoteTargetPath) {
		return gulp.src(src)
			.pipe($.wait(50))
			.pipe($.sftp({
				'host'       : args['route-url'],
				'post'       : args['route-post'],
				'user'       : args['route-username'],
				'pass'       : args['route-password'],
				'remotePath' : remoteTargetPath
			}));
	};

	gulp.task('toDev', ['build'], function () {
		var sftp_root = sftpTpl(config.target[0] + 'files/**', '/');

		return merge(sftp_root);
	});
};
