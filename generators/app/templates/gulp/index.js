'use strict';

module.exports = function () {
	var config = require('./gulp.config.js')();

	var gulp = require('gulp');
	var $    = require('gulp-load-plugins')({lazy: true});
	var args = require('yargs')
		// Debug Mode
		.boolean('debug')
		.describe('debug', 'Debug Mode')
		// Unit Test File
		.alias('u', 'unit')
		.default('u', null)
		.describe('u', 'Unit Test File')
		// Router
		.default('route-url', config.router.host)
		.describe('route-url', 'Router URL')
		.default('route-port', config.router.port)
		.describe('route-port', 'Router Port')
		.default('route-username', config.router.user)
		.describe('route-username', 'Router Username')
		.default('route-password', config.router.pass)
		.describe('route-password', 'Router Password')
		.argv;

	var taskList = require('fs').readdirSync('./gulp/tasks/');
	taskList.forEach(function (file) {
		require('./tasks/' + file)(gulp, config, $, args);
	});

	gulp.task('help', $.taskListing);
};
