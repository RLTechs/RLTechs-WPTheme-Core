/**
 * File: config/themeConfig.js
 *
 * Author: Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * Link: https://rltechsllc.com <codeteam@rltechs.com>
 * Copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 *
 */

/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

/** External Dependencies */
import * as g from 'gulp';

/** Theme Info Data */
export const theme = {
	PHPNamespace: 'Rltechs\\RLTechs',
	name: 'ThemeCore', // The Name Of Your Theme
	theme_uri: 'http://wordpress.rltechsllc.com/', // The theme's primary URL.
	description: 'ThemeCore is a Premium WordPress theme for...', // Description for the theme.
	author: 'RL Technologies LLC', // The author of the theme.
	author_uri: 'https://rltechsllc.com/', //
	version: '0.0.1a', //
	license: 'MIT', //
	license_uri: 'https://wordpress.rltechsllc.com/licensing/multicomm', //
	tags: 'full-page', //
	slug: 'themecore', //
};

/** BrowserSync Info */
export const bsConf = {
	proxy: 'http://themecore.local/',
	open: true,
	notify: true,
	liveReload: true,
	reloadDelay: 150,
	https: false,
	//watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir']
	//browser: [ 'safari', 'microsoft edge' ],
}

/** EOF */
