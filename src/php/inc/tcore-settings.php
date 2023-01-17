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
 * @version 1.0.0
 * 
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

function tcore_admin_page_add() {
	
	// Generate ThemeCore Admin Page
	add_menu_page( 'ThemeCore Options', 'ThemeCore', 'manage_options', 'tcore_options', 'tcore_theme_options_create_page', 'dashicons-admin-site', 3 );

	// Generate ThemeCore Submenu pages
	add_submenu_page( 'tcore_options', 'ThemeCore Options', 'General', 'manage_options', 'tcore_options', 'tcore_theme_options_create_page' );
	add_submenu_page( 'tcore_options', 'ThemeCore Social', 'Social', 'manage_options', 'tcore_options_social', 'tcore_theme_settings_page' );
}
add_action( 'admin_menu', 'tcore_admin_page_add' );

function tcore_theme_options_create_page() {
	//generation of our admin page
	require_once TCORE_ADMN_DIR . 'admin.php';
}

function tcore_theme_settings_page() {
	// Generate Settings Page
	require_once TCORE_ADMN_DIR . 'social.php';

}
