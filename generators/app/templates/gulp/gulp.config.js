'use strict';

module.exports = function () {

	var pkj    = require('../package.json');
	var moment = require('moment');
	var date   = moment().format('YYYY-MM-DD');

	pkj.source = './src/';
	pkj.target = [
		'./dest/' + date + '/',
		'./dest/lastest/'
	];
	pkj.test = {
		'path': './test/',
		'target': './dest/test/'
	};
	pkj.router = {
		'host': '192.168.1.1',
		'port': '22',
		'user': 'root',
		'pass': 'admin'
	};

	return pkj;
};
