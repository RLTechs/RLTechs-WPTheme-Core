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
import { css } from '../gulp/styles';
import { graphics } from '../gulp/graphics';
import { fonts } from '../gulp/fonts';
import { jss } from '../gulp/scripts';
import { php } from '../gulp/php';
import { wpreq } from '../gulp/wpreq';

const reload = done => {
	browserSync.reload();
	done();
};

const bsWatch = ( )=> {
	g.watch(`${paths.wpr.dev}`, g.series( cWpr, wpreq, reload));
	g.watch(`${paths.php.dev}`, g.series( php, reload));
	g.watch(`${paths.css.dev}`, g.series( cCss, css, reload));
	g.watch(`${paths.jss.dev}`, g.series( cJs, jss, reload));
	g.watch(`${paths.fnt.dev}`, g.series( fonts, reload));
	g.watch(`${paths.ico.dev}`, g.series( graphics, reload));
	g.watch(`${paths.img.dev}`, g.series( graphics, reload));
	g.watch(`${paths.svg.dev}`, g.series( graphics, reload));

};

/** BrowserSync */
const bsSync = done => {
	browserSync.init({
		proxy: bsConf.proxy,
		open: bsConf.open,
		//notify: bsConf.notify,
		https: bsConf.https,
		//browser:
		reloadDelay: bsConf.reloadDelay
	});
	done();
};

export { reload, bsWatch, bsSync };