/**
 * File: config/gulpConfig.js
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

/** Internal Dependencies */
import path from 'path';
import { theme } from './themeConfig';

/** Is This A Development or Production Build */
export const ifProd = process.env.NODE_ENV === 'production';

/** Define Root Path */
const rootPath = process.cwd();

/** Define Node Path */
const nPath = `${rootPath}/node_modules`

/** Define Gulp Path */
const gPath = `${rootPath}/gulp`;

/** Define Test Path */
const tPath = `${rootPath}/tests`;

/** Define Source Path */
const srcPath = `${rootPath}/src`;

/** Define Development Path */
const devPath = `${rootPath}/build`;

/** Define Distribution Path */
const distPath = `${rootPath}/dist`;

/** Export System Paths Above For Global Use */
const sysPaths = { rootPath, nPath, gPath, tPath, srcPath, devPath, distPath };
export { sysPaths };

/** Export Needed Paths */
export const paths = {
	/** PHP Files */
	fnt: {
		src: `${srcPath}/fonts/**`,
		dev: `${devPath}/${theme.slug}/assets/fonts`,
		dist: `${distPath}/${theme.slug}/assets/fonts`,
	},
	php: {
		src: `${srcPath}/php/**`,
		dev: `${devPath}/${theme.slug}`,
		dist: `${distPath}/${theme.slug}`,
	},

	wpr: {
		src: `${srcPath}/wp-required/*.*`,
		dev: `${devPath}/${theme.slug}`,
		dist: `${distPath}/${theme.slug}`,
	},
};

/** EOF */
