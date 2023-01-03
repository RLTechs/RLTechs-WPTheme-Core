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

/** Define and Export Root Path */
export const rootPath = process.cwd();

/** Define and Export Gulp Path */
export const gPath = `${rootPath}/gulp`;

/** Define and Export Test Path */
export const tPath = `${rootPath}/tests`;

/** Define and Export Source Path */
export const srcPath = `${rootPath}/src`;

/** Define and Export Development Path */
export const devPath = `${rootPath}/build`;

/** Define and Export Distribution Path */
export const distPath = `${rootPath}/dist`;

/** Export Needed Paths */
export const paths = {
	/** PHP Files */
	php: {
		src: `${srcPath}/php/**`,
		dev: `${devPath}/${theme.slug}`,
		dist: `${distPath}/${theme.slug}`,
	},
};

/** EOF */
