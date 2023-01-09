<?php
/**
 * File: func/tcore-styles.php
 *
 * author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * link https://rltechsllc.com
 * copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * license
 *
 * package RLTechs/MyShul
 * version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

function tcore_styles() {
    //

}

add_action( 'wp_enqueue_scripts', 'tcore_styles' );

function tcore_admin_styles() {
    //
}

add_action( 'admin_enqueue_scripts', 'tcore_admin_styles' );