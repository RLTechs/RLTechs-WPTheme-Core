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
 * Setup theme location path shortcuts
 * @since 1.0.0
 */
require get_template_directory() . '/inc/tcore-paths.php';

/**
 * Compatibility Version Check... These are the minimum versions
 * of PHP and Wordpress required to use this theme. You can
 * increase these values, but not decrease or you will break it.
 * @since 1.0.0
 */
/** Set Minimum Versions */
define( 'TCORE_MINIMUM_WP_VERSION', '5.6' );   // The minimum Wordpress Version Supported
define( 'TCORE_MINIMUM_PHP_VERSION', '7.4' );  // The minimum PHP Version Supported
define( 'TCORE_MINIMUM_WOO_VERSION', '1.1');   // The minimum WooCommerce Version Supported
define( 'TCORE_MINIMUM_JPK_VERSION', '1.1'); // The Minimum Jetpack Version Supported

/**
 * If versions are not correct exit and show error/upgrade page.
 * @since 1.0.0
 */
// TODO Add WooCommerce and Jetpack checks
if ( version_compare( $GLOBALS['wp_version'], TCORE_MINIMUM_WP_VERSION, '<' ) || version_compare( phpversion(), TCORE_MINIMUM_PHP_VERSION, '<' ) ) {
	require TCORE_TDIR . '/inc/tcore-reqs.php';
	return;
};


/** 
 * Initialize and Setup Theme
 * @since 1.0.0
 */
if ( ! function_exists( 'tcore_theme_setup' ) ) :

    function tcore_theme_setup(){
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
         * More information on translations can be found at the following links...
         * https://make.wordpress.org/polyglots/teams/
         * https://developer.wordpress.org/themes/functionality/localization/
         * https://developer.wordpress.org/reference/functions/load_theme_textdomain/
         *
		 */
		load_theme_textdomain( 'tcore', TCORE_TDIR . '/languages' );

        /*
         * Add default posts and comments RSS feed links to head.
         */
		add_theme_support( 'automatic-feed-links' );

        /*
         * Let WordPress manage the document title.
         */
        add_theme_support( 'title-tag' );

        /*
         * Enable Thumbnail support for posts ad pages.
         */
        add_theme_support( 'post-thumbnails' );

		/**
         * Set up the WordPress core custom background feature.
         */
		add_theme_support( 'custom-background', apply_filters( 'tcore_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		/**
         * Add theme support for selective refresh for widgets.
         */
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
         * Add support for core custom logo.
         */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
		add_theme_support('html5', array(
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		));

    }
endif;

add_action( 'after_setup', 'tcore_theme_setup' );

