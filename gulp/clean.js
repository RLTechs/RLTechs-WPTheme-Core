/**
 * File: gulp/clean.js
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

/** Internal Dependencies */
import { paths, sysPaths, ifProd } from '../config/gulpConfig';
import { theme } from '../config/themeConfig';
import del from 'del';

/** Wipe Build Directory */
// TODO add console messages for each wipe section
// along with progress indicators?
function wBuild() {
	const dPaths = [
		`${sysPaths.devPath}/${theme.slug}/**`,
		`!${sysPaths.devPath}/${theme.slug}`,
	];

	return del(dPaths);
}

/** Wipe Vendor Files From SRC */
function wVend() {
	// TODO add console messages for each wipe section
	// along with progress indicators?
	const dPaths = [
		`${sysPaths.srcPath}/scss/bootstrap`,
		`${sysPaths.srcPath}/js/bootstrap.*`,
		`${sysPaths.srcPath}/fonts/boot*.*`,
		`${sysPaths.srcPath}/scss/bootstrap-icons`,
		`${sysPaths.srcPath}/scss/fontawesome`,
		`${sysPaths.srcPath}/fonts/fa*.*`,
		`${sysPaths.srcPath}/js/popper.*`,
	];

	return del(dPaths);
}

/** Wipe child Build Directory */
function wChild() {
	// TODO Add Function Later When Using Child
}

/** Cleanup WP-Required Files */
function cWpr() {
	// TODO add console messages for each wipe section
	// along with progress indicators?
	const dPaths = [
		`${paths.wpr.dev}/*.txt`,
		`${paths.wpr.dev}/style.css`,
		`!${paths.wpr.dev}/`,
	];

	return del(dPaths);
}

/** Cleanup CSS Directory and Files */
function cCss() {
	// TODO add console messages for each wipe section
	// along with progress indicators?
	const dPaths = [
		`${paths.css.dev}/*.css`,
		`${paths.css.dev}/*.css.map`,
		`!${paths.css.dev}`,
	];

	return del(dPaths);
}

/** Cleanup JS Directory and Files */
function cJs() {
	// TODO add console messages for each wipe section
	// along with progress indicators?
	const dPaths = [
		`${paths.jss.dev}/*.js`,
		`${paths.jss.dev}/*.js.map`,
		`!${paths.jss.dev}/`,
	];

	return del(dPaths);
}

/** Export Cleanup Functions */
export { wBuild, wVend, cWpr, cCss, cJs };

/** EOF */
