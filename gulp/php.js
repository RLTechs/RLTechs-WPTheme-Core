/**
 * File: gulp/php.js
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
import { paths, ifProd, gPlugins } from '../config/gulpConfig';

function php( done ) {
    /** If Production Then Do */
    if (ifProd) {
        /** Replace Default Theme Data With Custom */
		return console.log('production'), done();
    } else {
        return g
         .src(paths.php.src)
         .pipe(g.dest(paths.php.dev)),
         done();
    }

}

export { php };
