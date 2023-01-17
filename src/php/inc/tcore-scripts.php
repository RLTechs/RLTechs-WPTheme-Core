<?php
/**
 * File: func/tcore-scripts.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package RLTechs/MyShul
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

function tcore_scripts() {

    /** Register JS Files */
    $tcore_bs_js = TCORE_AURI . '/js/bootstrap.js';
	wp_register_script( 'tcore-bs', $tcore_bs_js, array(), null, true);

    $tcore_pop_js = TCORE_AURI . '/js/popper.js';
	wp_register_script( 'tcore-pop', $tcore_pop_js, array(), null, true);

    $tcore_site_js = TCORE_AURI . '/js/themecore.js';
	wp_register_script( 'tcore-site', $tcore_site_js, array(), null, true);

    /** Enqueue Files IN ORDER */
    wp_enqueue_script('tcore-bs');

    //wp_enqueue_script('tcore-pop');

    wp_enqueue_script('tcore-site');

}

add_action( 'wp_enqueue_scripts', 'tcore_scripts' );

function tcore_admin_scripts() {

   /** Register JS Files */
   $tcore_bs_js_admin = TCORE_AURI . '/js/bootstrap.js';
   wp_register_script( 'tcore-bs-admin', $tcore_bs_js_admin, array(), null, true);

   $tcore_pop_js_admin = TCORE_AURI . '/js/popper.js';
   wp_register_script( 'tcore-pop-admin', $tcore_pop_js_admin, array(), null, true);

   $tcore_admin_js = TCORE_AURI . '/js/themecore-admin.js';
   wp_register_script( 'tcore-admin', $tcore_admin_js, array(), null, true);

   /** Enqueue Files IN ORDER */
   wp_enqueue_script('tcore-bs-admin');

   //wp_enqueue_script('tcore-pop');

   wp_enqueue_script('tcore-admin');

}

add_action( 'admin_enqueue_scripts', 'tcore_admin_scripts' );
