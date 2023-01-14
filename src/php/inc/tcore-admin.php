<?php
/**
 * File: inc/tcore-admin.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package ThemeCore
 * @version 0.0.1a
 * 
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

function tcore_admin_page_add() {
	
	add_menu_page( 'ThemeCore Options', 'ThemeCore', 'manage_options', 'tcore-options', 'tcore_theme_options_create_page', 'dashicons-admin-site', 3 );
	
}
add_action( 'admin_menu', 'tcore_admin_page_add' );

function tcore_theme_options_create_page() {
	//generation of our admin page
	require TCORE_ADMN_DIR . 'admin.php';
}
