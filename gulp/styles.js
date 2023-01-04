/**
 * File: gulp/styles.js
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
import { paths, ifProd } from '../config/gulpConfig';
import log from 'fancy-log';
import c from 'ansi-colors';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import print from 'gulp-print';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

/** CSS */
function css() {
	/** If Production Then Do */
	if (ifProd) {
		/** Replace Default Theme Data With Custom */
		return console.log('production'), done();
	}
	/**
	 * CSS Function:
	 *  This will build or rebuild the changed
	 *  CSS files to the working 'Build' directory
	 *  to be server on the localhost dev server
	 */
	const sass = gulpSass(dartSass);
	let nSrc = 0,
		nDes = 0;
	return g
		.src(paths.css.src)
		.pipe(plumber(), log(c.bold(c.magenta('CSS Development Files Building...'))))
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.on('data', function () {
			nSrc += 1;
		})
		.pipe(sourcemaps.write('.'))
		.pipe(changed(paths.css.dev))
		.pipe(g.dest(paths.css.dev))
		.on('data', function () {
			nDes += 1;
		})
		.on('finish', function () {
			log(c.magenta(c.bold('CSS File Results...')));
			log(
				c.magenta('Out of'),
				c.bold(c.magenta(nSrc)),
				c.magenta('files available...')
			);
			log(
				c.magenta('...'),
				c.bold(c.magenta(nDes)),
				c.magenta(
					'newer files (including maps) were found and copied over.'
				)
			);
		})
		.pipe(print((filepath) => `${filepath}`))
		.pipe(plumber.stop());
}

export { css };

/** EOF */
