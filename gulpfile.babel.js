/**
 * File: gulpfile.babel.js
 *
 * Author: Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * Link: https://codeteam.rltechsllc.com <codeteam@rltechs.com>
 * Copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 *
 */

/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

/** Retrieve Theme Settings */

/** Retrieve Directory Info */

/** External Dependencies */
import * as g from 'gulp';

/** Internal Dependencies */
import { wBuild, wVend, cWpr, cCss, cJs } from './gulp/clean';
import { gCss } from './gulp/styles';
import { gImgs } from './gulp/graphics';
import { gFonts } from './gulp/fonts';
import { gJs } from './gulp/scripts';
import { gPhp } from './gulp/php';
import { gVend } from './gulp/vendors';
import { gReq } from './gulp/wpreq';
import { reload, bsWatch, bsSync } from './gulp/bsync';

/** Build Gulp Tasks */

/** Export Tasks */
const wbMain = wBuild;

/** Default Export Task */
const gUpVend = g.series(wVend, gVend);

const gDev = g.series(
	wbMain,
	g.series(gReq, gPhp, gJs, gCss, gFonts, gImgs),
	bsSync,
	bsWatch
);

export default gDev;

/** Export All Imports as Tasks */
export {
	gVend,
	gReq,
	gPhp,
	gFonts,
	gImgs,
	gCss,
	gJs,
	wBuild,
	wVend,
	cWpr,
	cCss,
	cJs,
	reload,
	bsSync,
	bsWatch,
	gUpVend,
	gDev
};

/** End of File */
