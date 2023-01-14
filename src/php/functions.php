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
 * 
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

/**
 * Directory path and URI path shortcuts for ThemeCore.
 * Both set are in the exact same order below for DIR and URI.
 * 
 * @since 1.0.0 
 */

/** Directory Paths */
if (!defined('TCORE_TDIR'))		        define('TCORE_TDIR', trailingslashit(get_template_directory()));                             // The main theme wp directory.
if (!defined('TCORE_SDIR'))		        define('TCORE_SDIR', trailingslashit(get_stylesheet_directory()));                           // The main theme wp stylesheet directory.
if (!defined('TCORE_ADIR'))		        define('TCORE_ADIR', trailingslashit(get_template_directory() . '/assets'));                 // The main theme wp assets directory.
if (!defined('TCORE_ADMN_DIR'))		    define('TCORE_ADMN_DIR', trailingslashit(get_template_directory() . '/admin'));              // The theme admin directory.
if (!defined('TCORE_CLSS_DIR'))		    define('TCORE_CLSS_DIR', trailingslashit(get_template_directory() . '/class'));              // The theme classes directory.
if (!defined('TCORE_INC_DIR'))		    define('TCORE_INC_DIR', trailingslashit(get_template_directory() . '/inc'));                 // The theme includes/functions directory.
if (!defined('TCORE_TEMPS_DIR'))		define('TCORE_TEMPS_DIR', trailingslashit(get_template_directory() . '/templates'));         // The theme templates directory.
if (!defined('TCORE_WIDGS_DIR'))		define('TCORE_WIDGS_DIR', trailingslashit(get_template_directory() . '/widgets'));           // The theme built in widgets directory.

/** URI Paths */
if (!defined('TCORE_TURI'))		        define('TCORE_TURI', trailingslashit(get_template_directory_uri()));                         // The main theme wp uri.
if (!defined('TCORE_SURI'))		        define('TCORE_SURI', trailingslashit(get_stylesheet_directory_uri()));                       // The main theme wp stylesheet uri.
if (!defined('TCORE_AURI'))		        define('TCORE_AURI', trailingslashit(get_template_directory_uri() . '/assets'));             // The main theme wp assets uri.
if (!defined('TCORE_ADMN_URI'))		    define('TCORE_ADMN_URI', trailingslashit(get_template_directory_uri() . '/admin'));          // The theme admin uri.
if (!defined('TCORE_CLSS_URI'))		    define('TCORE_CLSS_URI', trailingslashit(get_template_directory_uri() . '/class'));          // The theme classes uri.
if (!defined('TCORE_INC_URI'))		    define('TCORE_INC_URI', trailingslashit(get_template_directory_uri() . '/inc'));             // The theme includes/functions uri.
if (!defined('TCORE_TEMPS_URI'))		define('TCORE_TEMPS_URI', trailingslashit(get_template_directory_uri() . '/templates'));     // The theme templates uri.
if (!defined('TCORE_WIDGS_URI'))		define('TCORE_WIDGS_URI', trailingslashit(get_template_directory_uri() . '/widgets'));       // The theme built in widgets uri.

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
	require TCORE_INC_DIR . 'tcore-reqs.php';
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

/**
 * Enqueue required theme scripts and functions.
 * 01. Sidebars and Widgets
 * 02. CSS Files
 * 03. Javascript Files
 * 04.
 * 05. Theme Admin Options
 * @since 1.0.0
 */

require TCORE_INC_DIR . "tcore-styles.php";					// 02
require TCORE_INC_DIR . "tcore-scripts.php";				// 03

require TCORE_INC_DIR . 'tcore-admin.php';					// 05



/**   if ( is_user_logged_in() ) {
*	echo 'Welcome, logged in user. <a href="'.wp_logout_url().'">Click here to logout</a>.';
*   } else {
*	echo 'Please login by <a href="'.wp_login_url().'">clicking here</a>.';
*   };*/ 

   /**if( current_user_can('manage_options') ) {
	*echo 'This user can manage WordPress options. (Settings Page)';
  *};
  */