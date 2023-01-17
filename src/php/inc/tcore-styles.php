<?php
/**
 * File: func/tcore-styles.php
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

function tcore_styles() {
    /** Register Stylesheets */
    $tcore_main_stylesheet = TCORE_AURI . '/css/themecore.css';
	wp_register_style( 'tcore-main', $tcore_main_stylesheet, array(), null);

    $tcore_bsi_stylesheet = TCORE_AURI . '/css/bs-icons.css';
	wp_register_style( 'tcore-bsi', $tcore_bsi_stylesheet, array(), null);

    $tcore_fa_stylesheet = TCORE_AURI . '/css/fontawesome.css';
	wp_register_style( 'tcore-fa', $tcore_fa_stylesheet, array(), null);

    /** Enqueue Files IN ORDER */
    wp_enqueue_style('tcore-main');
    wp_enqueue_style('tcore-bsi');
    wp_enqueue_style('tcore-fa');

}

add_action( 'wp_enqueue_scripts', 'tcore_styles' );

function tcore_admin_styles() {
    /** Register Stylesheets */
    $tcore_admin_main_stylesheet = TCORE_AURI . '/css/themecore-admin.css';
	wp_register_style( 'tcore-admin-main', $tcore_admin_main_stylesheet, array(), null);

    $tcore_admin_bsi_stylesheet = TCORE_AURI . '/css/bs-icons.css';
	wp_register_style( 'tcore-admin-bsi', $tcore_admin_bsi_stylesheet, array(), null);

    $tcore_admin_fa_stylesheet = TCORE_AURI . '/css/fontawesome.css';
	wp_register_style( 'tcore-admin-fa', $tcore_admin_fa_stylesheet, array(), null);

    /** Enqueue Files IN ORDER */
    wp_enqueue_style('tcore-admin-main');
    wp_enqueue_style('tcore-admin-bsi');
    wp_enqueue_style('tcore-admin-fa');

}

add_action( 'admin_enqueue_scripts', 'tcore_admin_styles' );