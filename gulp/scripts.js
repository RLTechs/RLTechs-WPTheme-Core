/**
 * File: gulp/scripts.js
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
import include from 'gulp-include';
import plumber from 'gulp-plumber';
import print from 'gulp-print';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import changed from 'gulp-changed';

/** JS */
function jss() {
	/** If Production Then Do */
	if (ifProd) {
		/** Replace Default Theme Data With Custom */
		return console.log('production'), done();
	}
	/**
	 * JS Function:
	 *  This will build or rebuild the changed
	 *  JS files to the working 'Build' directory
	 *  to be server on the localhost dev server
	 */
	let nSrc = 0,
		nDes = 0;
	return g
		.src(paths.jss.src)
		.pipe(
			plumber(),
			log(c.bold(c.magenta('CSS Development Files Building...')))
		)
		.pipe(include())
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ['@babel/env'],
			})
		)
		.on('data', function () {
			nSrc += 1;
		})
		.pipe(sourcemaps.write('.'))
		.pipe(changed(paths.jss.dev))
		.pipe(g.dest(paths.jss.dev))
		.on('data', function () {
			nDes += 1;
		})
		.on('finish', function () {
			log(c.magenta(c.bold('JS File Results...')));
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

export { jss };

/** EOF */
