/**
 * File: gulp/bsync.js
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
import { theme, bsConf } from '../config/themeConfig';
import { wBuild, wVend, cWpr, cCss, cJs } from '../gulp/clean';
import browserSync from 'browser-sync';
import { gCss } from '../gulp/styles';
import { gImgs } from '../gulp/graphics';
import { gFonts } from '../gulp/fonts';
import { gJs } from '../gulp/scripts';
import { gPhp } from '../gulp/php';
import { gReq } from '../gulp/wpreq';


/** BrowserSync */
const bsSync = (done) => {
	browserSync.init({
		proxy: bsConf.proxy,
		open: bsConf.open,
		notify: bsConf.notify,
		//https: bsConf.https,
		//browser:
		reloadDelay: bsConf.reloadDelay
	});
	done();
};

const bsWatch = ( ) => {
	g.watch(`${paths.php.src}`, g.series(gPhp, reload));
	g.watch(`${paths.fnt.src}`, g.series(gFonts, reload));
	g.watch(`${paths.wpr.src}`, g.series(cWpr, gReq, reload));
	g.watch(`${paths.css.src}`, g.series(cCss, gCss, reload));
	g.watch(`${paths.jss.src}`, g.series(cJs, gJs, reload));
	g.watch(`${paths.ico.src}`, g.series(gImgs, reload));
	g.watch(`${paths.img.src}`, g.series(gImgs, reload));
	g.watch(`${paths.svg.src}`, g.series(gImgs, reload));
};

const reload = (done) => {
	browserSync.reload();
	done();
};

export { bsSync, reload, bsWatch };
