/**
 * File: gulp/graphics.js
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

function icons() {
	/** If Production Then Do */
	if (ifProd) {
		/** Replace Default Theme Data With Custom */
		return console.log('production');
	}
	/**
	 * Icon Development:
	 *  This will build or rebuild the changed
	 *  Icon files to the working 'Build' directory
	 *  to be server on the localhost dev server
	 */
	let nSrc = 0,
		nDes = 0;

	return g
		.src(paths.ico.src)
		.pipe(
			plumber(),
			log(c.bold(c.cyan('Icon Development Files Building...')))
		)
		.on('data', function () {
			nSrc += 1;
		})
		.pipe(changed(paths.ico.dev))
		.pipe(g.dest(paths.ico.dev))
		.on('data', function () {
			nDes += 1;
		})
		.on('finish', function () {
			log(c.cyan(c.bold('Icon Development Files Results...')));
			log(
				c.cyan('Out of'),
				c.bold(c.red.italic(nSrc)),
				c.cyan('Files Available...')
			);
			log(
				c.cyan('...'),
				c.bold(c.red.italic(nDes)),
				c.cyan(
					'Newer files were found and written to the development build.'
				)
			);
		})
		.pipe(print((filepath) => `${filepath}`))
		.pipe(plumber.stop());
}

function images() {
	/** If Production Then Do */
	if (ifProd) {
		/** Replace Default Theme Data With Custom */
		return console.log('production');
	}
	/**
	 * Image Development:
	 *  This will build or rebuild the changed
	 *  Image files to the working 'Build' directory
	 *  to be server on the localhost dev server
	 */
	let nSrc = 0,
		nDes = 0;

	return g
		.src(paths.img.src)
		.pipe(
			plumber(),
			log(c.bold(c.cyan('Images Development Files Building...')))
		)
		.on('data', function () {
			nSrc += 1;
		})
		.pipe(changed(paths.img.dev))
		.pipe(g.dest(paths.img.dev))
		.on('data', function () {
			nDes += 1;
		})
		.on('finish', function () {
			log(c.cyan(c.bold('Images Development Files Results...')));
			log(
				c.cyan('Out of'),
				c.bold(c.red.italic(nSrc)),
				c.cyan('Files Available...')
			);
			log(
				c.cyan('...'),
				c.bold(c.red.italic(nDes)),
				c.cyan(
					'Newer files were found and written to the development build.'
				)
			);
		})
		.pipe(print((filepath) => `${filepath}`))
		.pipe(plumber.stop());
}

function svgs() {
	/** If Production Then Do */
	if (ifProd) {
		/** Replace Default Theme Data With Custom */
		return console.log('production');
	}
	/**
	 * SVGs Development:
	 *  This will build or rebuild the changed
	 *  SVG files to the working 'Build' directory
	 *  to be server on the localhost dev server
	 */
	let nSrc = 0,
		nDes = 0;

	return g
		.src(paths.svg.src)
		.pipe(
			plumber(),
			log(c.bold(c.cyan('SVG Development Files Building...')))
		)
		.on('data', function () {
			nSrc += 1;
		})
		.pipe(changed(paths.svg.dev))
		.pipe(g.dest(paths.svg.dev))
		.on('data', function () {
			nDes += 1;
		})
		.on('finish', function () {
			log(c.cyan(c.bold('SVG Development Files Results...')));
			log(
				c.cyan('Out of'),
				c.bold(c.red.italic(nSrc)),
				c.cyan('Files Available...')
			);
			log(
				c.cyan('...'),
				c.bold(c.red.italic(nDes)),
				c.cyan(
					'Newer files were found and written to the development build.'
				)
			);
		})
		.pipe(print((filepath) => `${filepath}`))
		.pipe(plumber.stop());
}

export const gImgs = g.series( icons, images, svgs );

/** EOF */
