/**
 * File: gulp/vendors.js
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
import del from 'del';
import plumber from 'gulp-plumber';
import print from 'gulp-print';

function vend(done) {
	/**
	 * Vendor Files Development:
	 *  This will build or rebuild the changed
	 *  Vender Files files to the working
	 * 'Build' directory to be server on the
	 * localhost dev server
	 */

	function bsScss() {
		let nSrc = 0,
			nDes = 0;

		return g
			.src(paths.vend.bs.src)
			.pipe(
				plumber(),
				log(
					c.bold(
						c.cyan(
							'Bootstrap SCSS Files Copying To SRC Directory...'
						)
					)
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(paths.vend.bs.dev))
			.pipe(g.dest(paths.vend.bs.dev))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('Bootstrap SCSS Files Results...')));
				log(
					c.cyan('Out of'),
					c.bold(c.red.italic(nSrc)),
					c.cyan('Files Available...')
				);
				log(
					c.cyan('...'),
					c.bold(c.red.italic(nDes)),
					c.cyan(
						'Newer files were found and written to the src directory.'
					)
				);
			})
			.pipe(print((filepath) => `${filepath}`))
			.pipe(plumber.stop());
	}

	function bsJs() {
		//
	}

	function bsIco() {
		//
	}

	function bsIcoScss() {
		//
	}

	function fa() {
		//
	}

	function faScss() {
		//
	}

	function popJs() {
		//
	}

	bsScss();
	done();
};

function wipeVend() {
	//
}

export { vend, wipeVend };

function xTemp(){
	return g
		.src(paths.vend.src)
		.pipe(plumber(), log(c.bold(c.cyan('Vendor Source Files Copying...'))))
		.on('data', function () {
			nSrc += 1;
		})
		.pipe(changed(paths.vend.dev))
		.pipe(g.dest(paths.vend.dev))
		.on('data', function () {
			nDes += 1;
		})
		.on('finish', function () {
			log(c.cyan(c.bold('Vendor Source Files Results...')));
			log(
				c.cyan('Out of'),
				c.bold(c.red.italic(nSrc)),
				c.cyan('Files Available...')
			);
			log(
				c.cyan('...'),
				c.bold(c.red.italic(nDes)),
				c.cyan(
					'Newer files were found and written to the source directory.'
				)
			);
		})
		.pipe(print((filepath) => `${filepath}`))
		.pipe(plumber.stop());
}