/*!
 * peer-server - index.js
 * Copyright(c) 2014
 * Author: dead-horse <dead_horse@qq.com>
 */

'use strict';

/**
 * Module dependencies.
 */

var PeerServer = require('peer').PeerServer;
var port = process.env.PORT || 7002;

var server = new PeerServer({ port: port });
