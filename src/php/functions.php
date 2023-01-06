<?php
/**
 * File: functions.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package ThemeCore
 * @version 0.0.1a
 * 0.0.1a
 */

namespace RLTechs\ThemeCore;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

/**
 * Compatibility Version Check... These are the minimum versions
 * of PHP and Wordpress required to use this theme. You can
 * increase these values, but not decrease or you will break it.
 * @since 1.0.0
 */
/** Set Minimum Versions */
define( 'TCORE_MINIMUM_WP_VERSION', '5.6' );   // The minimum Wordpress Version Supported
define( 'TCORE_MINIMUM_PHP_VERSION', '7.4' );  // The minimum PHP Version Supported
define( 'TCORE_MINIMUM_WOO_VERSION', '1.2');   // The minimum WooCommerce Version Supported
define( 'TCORE_MINIMUM_JPACK_VERSION', '1.2'); // The Minimum Jetpack Version Supported

/**
 * If versions are not correct exit and show error/upgrade page.
 * @since 1.0.0
 */
// TODO Add WooCommerce and Jetpack checks
if ( version_compare( $GLOBALS['wp_version'], TCORE_MINIMUM_WP_VERSION, '<' ) || version_compare( phpversion(), TCORE_MINIMUM_PHP_VERSION, '<' ) ) {
	require trailingslashit(get_template_directory()) . 'inc/tcore-reqs.php';
	return;
};
