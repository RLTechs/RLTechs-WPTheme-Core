<?php
/**
 * File: func/tcore-xtra-func.php
 *
 * author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * link https://rltechsllc.com
 * copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * license
 *
 * package RLTechs/tcore
 * version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function tcore_body_class($classes) {
    // Adds a class of hfeed to non-singular pages.
    if (!is_singular()) {
      $classes[] = 'hfeed';
    }
  
    // Adds a class of no-sidebar when there is no sidebar present.
    if (!is_active_sidebar('sidebar-1')) {
      $classes[] = 'no-sidebar';
    }
  
    return $classes;
  }
  add_filter('body_class', 'tcore_body_class');