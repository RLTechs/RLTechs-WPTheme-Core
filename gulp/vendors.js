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
import { paths, sysPaths, ifProd } from '../config/gulpConfig';
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
			.src(`${sysPaths.nPath}/bootstrap/scss/**`)
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
			.pipe(changed(`${sysPaths.srcPath}/scss/bootstrap`))
			.pipe(g.dest(`${sysPaths.srcPath}/scss/bootstrap`))
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
		let nSrc = 0,
			nDes = 0;

		return g
			.src(`${sysPaths.nPath}/bootstrap/dist/js/bootstrap.{js,js.map}`)
			.pipe(
				plumber(),
				log(
					c.bold(
						c.cyan('Bootstrap JS Files Copying To SRC Directory...')
					)
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(`${sysPaths.srcPath}/js/library/bootstrap`))
			.pipe(g.dest(`${sysPaths.srcPath}/js/library/bootstrap`))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('Bootstrap JS Files Results...')));
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

	function bsIco() {
		let nSrc = 0,
			nDes = 0;

		return g
			.src(`${sysPaths.nPath}/bootstrap-icons/font/fonts/*.*`)
			.pipe(
				plumber(),
				log(
					c.bold(
						c.cyan(
							'Bootstrap Icons Font Files Copying To SRC Directory...'
						)
					)
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(`${sysPaths.srcPath}/fonts`))
			.pipe(g.dest(`${sysPaths.srcPath}/fonts`))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('Bootstrap Icons Font Files Results...')));
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

	function bsIcoScss() {
		let nSrc = 0,
			nDes = 0;

		return g
			.src(`${sysPaths.nPath}/bootstrap-icons/font/*.scss`)
			.pipe(
				plumber(),
				log(
					c.bold(
						c.cyan(
							'Bootstrap Icons SCSS Files Copying To SRC Directory...'
						)
					)
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(`${sysPaths.srcPath}/scss/bootstrap-icons`))
			.pipe(g.dest(`${sysPaths.srcPath}/scss/bootstrap-icons`))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('Bootstrap Icons SCSS Files Results...')));
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

	function faScss() {
		let nSrc = 0,
			nDes = 0;

		return g
			.src(`${sysPaths.nPath}/@fortawesome/fontawesome-free/scss/**`)
			.pipe(
				plumber(),
				log(
					c.bold(
						c.cyan(
							'Fontawesome SCSS Files Copying To SRC Directory...'
						)
					)
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(`${sysPaths.srcPath}/scss/fontawesome`))
			.pipe(g.dest(`${sysPaths.srcPath}/scss/fontawesome`))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('Fontawesome SCSS Files Results...')));
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

	function faIco() {
		let nSrc = 0,
			nDes = 0;

		return g
			.src(
				`${sysPaths.nPath}/@fortawesome/fontawesome-free/webfonts/*.{woff,woff2}`
			)
			.pipe(
				plumber(),
				log(
					c.bold(
						c.cyan(
							'Fontawesome Font Files Copying To SRC Directory...'
						)
					)
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(`${sysPaths.srcPath}/fonts`))
			.pipe(g.dest(`${sysPaths.srcPath}/fonts`))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('Fontawesome Font Files Results...')));
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

	function popJs() {
		let nSrc = 0,
			nDes = 0;

		return g
			.src(`${sysPaths.nPath}/@popperjs/core/dist/esm/**`)
			.pipe(
				plumber(),
				log(
					c.bold(c.cyan('PopperJS Files Copying To SRC Directory...'))
				)
			)
			.on('data', function () {
				nSrc += 1;
			})
			.pipe(changed(`${sysPaths.srcPath}/js/library/popper`))
			.pipe(g.dest(`${sysPaths.srcPath}/js/library/popper`))
			.on('data', function () {
				nDes += 1;
			})
			.on('finish', function () {
				log(c.cyan(c.bold('PopperJS Files Results...')));
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

	//bsScss();
	//bsJs();
	//bsIco();
	//bsIcoScss();
	//faScss();
	//faIco();
	popJs();
	done();
}

function wipeVend() {
	//
}

export { vend, wipeVend };

/** EOF */
