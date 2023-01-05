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
import { parallel, series } from 'gulp';

/** Internal Dependencies */
import { wBuild, wVend, cWpr, cCss, cJs } from './gulp/clean';
import { css } from './gulp/styles';
import { graphics } from './gulp/graphics';
import { fonts } from './gulp/fonts';
import { jss } from './gulp/scripts';
import { php } from './gulp/php';
import { vend } from './gulp/vendors';
import { wpreq } from './gulp/wpreq';

/** Build Gulp Tasks */

/** Export Tasks */
/** Default Export Task */

//export const gDev = series(php, php);

//export default gDev;

/** Export All Imports as Tasks */
export {
	vend,
	wpreq,
	php,
	fonts,
	graphics,
	css,
	jss,
	wBuild,
	wVend,
	cWpr,
	cCss,
	cJs,
};

/** End of File */
