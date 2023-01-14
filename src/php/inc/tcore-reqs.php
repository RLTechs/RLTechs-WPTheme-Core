<?php
/**
 * File: inc/tcore-reqs.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package ThemeCore
 * @version 0.0.1a
 */

namespace RLTechs\ThemeCore;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

/**
 * 'function tcore_reqs_notmetmsg' gets and displays to the 
 * user a mesage abobut trwuirement snot being met for the
 * required minimum version for WP, PHP, Woocommerce, or Jetpack.
 * 
 * @since 1.0.0
 * 
 * @global string $wp_version being the installed Wordpress version.
 * @return string Message to show based on version deficiency.
 */
function tcore_reqs_notmetmsg() {
    /** */
    global $wp_version;

    $notmet_wp = version_compare( $wp_version, TCORE_MINIMUM_WP_VERSION, '<');
    $notmet_php = version_compare( phpversion(), TCORE_MINIMUM_PHP_VERSION, '<');
    //$notmet_woo = version_compare();
    //$notmet_jpk = version_compare();

    if ( $notmet_wp && $notmet_php ) {
        /* Polyglots: 1: required WP version number, 2: required PHP version number, 3: available WP version number, 4: available PHP version number */
        return sprintf( __( 'ThemeCore requires at least WordPress version %1$s and PHP version %2$s. You are running versions %3$s and %4$s respectively. Please update and try again.', 'tcore'), TCORE_MINIMUM_WP_VERSION, TCORE_MINIMUM_PHP_VERSION, $wp_version, phpversion() );

    }

    if ( $notmet_wp ) {
        /* Polyglots: 1: required WP version number, 2: available WP version number */
		return sprintf( __( 'ThemeCore requires at least WordPress version %1$s. You are running version %2$s. Please update and try again.', 'tcore' ), TCORE_MINIMUM_WP_VERSION, $wp_version );
    }

    if ( $notmet_php ) {
        /* Polyglots: 1: required PHP version number, 2: available PHP version number */
		return sprintf( __( 'ThemeCore requires at least PHP version %1$s. You are running version %2$s. Please update and try again.', 'tcore' ), TCORE_MINIMUM_PHP_VERSION, phpversion() );
    }

   // if ( $notmet_woo ) {
        //
   // }

   // if ( $notmet_jpk ) {
        //
   // }


    return '';

}

/**
 * Displays an error message if WP-CLI is used
 * when requirements are not met, then exits script.
 * @since 1.0.0
 */
if ( defined( 'WP_CLI' ) && WP_CLI ) {
	WP_CLI::error( tcore_reqs_notmetmsg() );
}

/**
 * Prevents switching to the theme when requirements are not met.
 * Switches to the default Wordpress theme.
 * @since 1.0.0
 */
function tcore_theme_switch() {
    switch_theme( WP_DEFAULT_THEME );
	unset( $_GET['activated'] );

	add_action( 'admin_notices', 'tcore_upgrade_notice' );
}

add_action( 'after_switch_theme', 'tcore_theme_switch' );


/**
 * Prints an update nag after an unsuccessful attempt to switch to the theme
 * when requirements are not met.
 * @since 1.0.0
 */
function tcore_upgrade_notice() {
    printf( '<div class="error"><p>%s</p></div>', esc_html( tcore_reqs_notmetmsg() ) );
};

/**
 * Prevents the Wordpress Customizer from being loaded 
 * when any of the requirements are not met.
 * @since 1.0.0
 */
function tcore_customize_notice() {
    wp_die(
		esc_html( tcore_reqs_notmetmsg() ),
		'',
		array(
			'back_link' => true,
		)
    );
}

add_action( 'load-customize.php', 'tcore_customize_notice' );

/**
 * Prevents the Theme Preview from being loaded 
 * when any of the requirements are not met.
 * @since 1.0.0
 */
function tcore_preview_notice() {
    if ( isset( $_GET['preview'] ) ) {
		wp_die( esc_html( tcore_reqs_notmetmsg() ) );
	}
}

add_action( 'template_redirect', 'tcore_preview_notice' );

/** EOF */